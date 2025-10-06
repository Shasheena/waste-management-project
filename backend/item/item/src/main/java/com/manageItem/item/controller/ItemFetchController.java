package com.manageItem.item.controller;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manageItem.item.dto.ItemWithSellerDto;
import com.manageItem.item.service.ItemAddService;

@RestController
@RequestMapping("/api/items/fetch")
public class ItemFetchController {

    private final ItemAddService itemAddService;

    public ItemFetchController(ItemAddService itemAddService) {
        this.itemAddService = itemAddService;
    }

    // ✅ Fetch all items
    @GetMapping("/all")
    public List<ItemWithSellerDto> getAllItems() {
        return itemAddService.getAllItemsWithSellerInfo();
    }
}
