package com.manageItem.item.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manageItem.item.dto.InterestedItemDto;
import com.manageItem.item.model.InterestedItem;
import com.manageItem.item.model.Item;
import com.manageItem.item.repository.InterestedItemRepository;
import com.manageItem.item.repository.ItemRepository;

@Service
public class InterestedItemService {

    @Autowired
    private InterestedItemRepository interestedItemRepository;

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private SellerClientService sellerClientService;

    public InterestedItem addInterestedItem(int itemId, String buyerEmail, double totalQty) {
        Item item = itemRepository.findById(itemId)
                .orElseThrow(() -> new RuntimeException("Item not found with id: " + itemId));

        InterestedItem interestedItem = new InterestedItem();
        interestedItem.setItemIdItem(item);
        interestedItem.setBuyerEmail(buyerEmail);
        interestedItem.setTotalQuantity(totalQty);
        interestedItem.setTotalPrice(totalQty * item.getUnitPrice());

        return interestedItemRepository.save(interestedItem);
    }

    public List<InterestedItemDto> getInterestsByBuyer(String buyerEmail) {
        List<InterestedItem> interests = interestedItemRepository.findByBuyerEmail(buyerEmail);

        return interests.stream().map(interest -> {
            Item item = interest.getItemIdItem();

            // Fetch seller info
            var sellerMono = sellerClientService.getSellerByEmail(item.getSellerEmail());
            var seller = sellerMono.block();

            String sellerUsername = seller != null ? seller.getSeller_username() : "Unknown";

            return new InterestedItemDto(
                    interest.getIdinterestedItemId(),
                    item.getItemId(),
                    item.getDescription(),
                    item.getUnitPrice(),
                    item.getQty(),
                    item.getImagePath(),
                    item.getSellerEmail(),
                    sellerUsername,
                    null, // city – fill if you fetch address
                    null, // district – fill if you fetch address
                    item.getStatus().getStatusName(),
                    interest.getTotalPrice());
        }).toList();
    }

    public InterestedItem getInterestedItemById(int id) {
        return interestedItemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Interested item not found with id " + id));
    }

    public void deleteInterestedItem(int id) {
        InterestedItem item = interestedItemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Interested item not found with id " + id));
        interestedItemRepository.delete(item);
    }

    public long countBySellerEmail(String sellerEmail) {
        return interestedItemRepository.countByItemIdItem_SellerEmail(sellerEmail);
    }

}
