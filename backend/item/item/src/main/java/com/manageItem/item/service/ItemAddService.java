package com.manageItem.item.service;

import java.io.File;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

// import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;

import com.manageItem.item.dto.ItemDto;
import com.manageItem.item.dto.ItemWithSellerDto;
import com.manageItem.item.dto.SellerInfoDto;
// import com.manageItem.item.dto.SellerInfoDto;
import com.manageItem.item.model.Item;
import com.manageItem.item.model.ItemCategory;
import com.manageItem.item.model.Status;
import com.manageItem.item.model.Units;
import com.manageItem.item.repository.InterestedItemRepository;
import com.manageItem.item.repository.ItemCategoryRepository;
import com.manageItem.item.repository.ItemRepository;
import com.manageItem.item.repository.StatusRepository;
import com.manageItem.item.repository.UnitRepository;

import reactor.core.publisher.Mono;

@Service
public class ItemAddService {

    private final InterestedItemRepository interestedItemRepository;
    private final ItemRepository itemRepository;
    private ItemCategoryRepository itemCategoryRepository;
    private UnitRepository unitRepository;
    private StatusRepository statusRepository;
    private final SellerClientService sellerClientService;

    private static final String UPLOAD_DIR = System.getProperty("user.dir") + "/uploads/";
    // private final WebClient webClient;

    // @Value("${seller.service.url}") // configurable in application.properties
    // private String sellerServiceUrl;

    public ItemAddService(ItemRepository itemRepository, ItemCategoryRepository itemCategoryRepository,
            UnitRepository unitRepository, WebClient.Builder webClientBuilder, StatusRepository statusRepository, InterestedItemRepository interestedItemRepository, SellerClientService sellerClientService) {
        this.itemRepository = itemRepository;
        this.itemCategoryRepository = itemCategoryRepository;
        this.unitRepository = unitRepository;
        this.statusRepository = statusRepository;
        this.interestedItemRepository = interestedItemRepository;
        this.sellerClientService = sellerClientService;
        // this.webClient = webClientBuilder.build();
    }

    private String saveImage(MultipartFile file) {
        try {
            File directory = new File(UPLOAD_DIR);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            String filePath = UPLOAD_DIR + fileName;
            file.transferTo(new File(filePath));

            // Save only relative path in DB
            return "uploads/" + fileName;
        } catch (Exception e) {
            throw new RuntimeException("Failed to store file: " + e.getMessage());
        }
    }

    public Item saveItem(ItemDto itemDTO, MultipartFile imageFile) {
        // 1. Fetch seller email from sellerAuth service
        // SellerInfoDto sellerEmail = webClient
        // .get()
        // .uri("http://localhost:8080/api/sellers/by-email?email=" +
        // itemDTO.getSellerEmail()) // adjust param as per API
        // .retrieve()
        // .bodyToMono(SellerInfoDto.class)
        // .block();

        // String email = sellerEmail.getEmail();

        // 2. Convert DTO to Entity
        Item item = new Item();
        item.setUnitPrice(itemDTO.getUnitPrice());
        item.setQty(itemDTO.getQty());
        item.setDescription(itemDTO.getDescription());
        item.setSellerEmail(itemDTO.getSellerEmail());

        // Save image file
        String imagePath = saveImage(imageFile);
        item.setImagePath(imagePath);

        ItemCategory category = itemCategoryRepository.findById(itemDTO.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Category not found"));
        item.setCategoryId(category);

        Units unit = unitRepository.findById(itemDTO.getUnit())
                .orElseThrow(() -> new RuntimeException("Unit not found"));
        item.setUnit(unit);

        Status status = statusRepository.getReferenceById(1); // lazy proxy
        item.setStatus(status);

        // 3. Save in DB;
        return itemRepository.save(item);
    }

    //Get items by seller
    public List<Item> getItemsBySeller(String email) {
        List<Item> items = itemRepository.findBySellerEmail(email);

        // For each item, compute interest count
        for (Item item : items) {
            int interestCount = interestedItemRepository.countByItemIdItem(item);
            item.setInterest(interestCount); // Add interest field temporarily
        }

        return items;
    }

    // Get item by ID
    public Item getItemById(int id) {
        Optional<Item> optionalItem = itemRepository.findById(id);
        return optionalItem.orElseThrow(() -> 
            new RuntimeException("Item not found with id " + id));
    }

    // Update item by ID
    public Item updateItem(int id, Item updatedItem) {
        Optional<Item> optionalItem = itemRepository.findById(id);

        if (optionalItem.isPresent()) {
            Item existingItem = optionalItem.get();
            existingItem.setUnitPrice(updatedItem.getUnitPrice());
            existingItem.setQty(updatedItem.getQty());
            existingItem.setDescription(updatedItem.getDescription());
            existingItem.setCategoryId(updatedItem.getCategoryId());
            existingItem.setSellerEmail(updatedItem.getSellerEmail());
            existingItem.setUnit(updatedItem.getUnit());
            existingItem.setStatus(updatedItem.getStatus());
            return itemRepository.save(existingItem);
        } else {
            throw new RuntimeException("Item not found with id " + id);
        }
    }

    // Delete item by ID
    public void deleteItem(int id) {
        Optional<Item> optionalItem = itemRepository.findById(id);
        if (optionalItem.isPresent()) {
            itemRepository.deleteById(id);
        } else {
            throw new RuntimeException("Item not found with id " + id);
        }
    }

    public List<ItemWithSellerDto> getAllItemsWithSellerInfo() {
        List<Item> items = itemRepository.findAll();

        return items.stream().map(item -> {
            // Call Seller service via WebClient
            Mono<SellerInfoDto> sellerMono = sellerClientService.getSellerByEmail(item.getSellerEmail());

            SellerInfoDto seller = sellerMono.block(); // blocking just for simplicity
            String sellerUsername = (seller != null) ? seller.getSeller_username() : "Unknown";

            return new ItemWithSellerDto(
                item.getItemId(),
                item.getDescription(),
                item.getUnitPrice(),
                item.getQty(),
                item.getSellerEmail(),
                sellerUsername,
                item.getImagePath()
            );
        }).collect(Collectors.toList());
    }
}
