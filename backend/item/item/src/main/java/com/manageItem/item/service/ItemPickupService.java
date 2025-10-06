package com.manageItem.item.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manageItem.item.model.Item;
import com.manageItem.item.model.ItemPickup;
import com.manageItem.item.repository.ItemPickupRepository;
import com.manageItem.item.repository.ItemRepository;

@Service
public class ItemPickupService {

    @Autowired
    private ItemPickupRepository itemPickupRepository;

    @Autowired
    private ItemRepository itemRepository;

    public String addPickup(int itemId, String buyerEmail, double totalQty, double totalPrice) {
        // Find the item by ID
        Item item = itemRepository.findById(itemId).orElse(null);
        if (item == null) {
            return "Item not found with ID: " + itemId;
        }

        // Create new pickup record
        ItemPickup pickup = new ItemPickup();
        pickup.setItemIdItem(item);
        pickup.setBuyerEmail(buyerEmail);
        pickup.setTotalQty(totalQty);
        pickup.setTotalPrice(totalPrice);

        // Save to DB
        itemPickupRepository.save(pickup);

        return "Pickup added successfully for item ID: " + itemId;
    }

    public long countPickupsBySeller(String sellerEmail) {
        return itemPickupRepository.countByItemIdItem_SellerEmail(sellerEmail);
    }

    public double sumTotalPriceBySeller(String sellerEmail) {
        Double sum = itemPickupRepository.sumTotalPriceBySeller(sellerEmail);
        return sum != null ? sum : 0.0;
    }
}
