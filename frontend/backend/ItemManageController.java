package com.manageItem.item.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manageItem.item.dto.ItemDto;
// import com.manageItem.item.model.Item;
import com.manageItem.item.service.ItemAddService;

@RestController
@RequestMapping("/item")
public class ItemManageController {
    private final ItemAddService itemAddService;

    public ItemManageController(ItemAddService itemAddService) {
        this.itemAddService = itemAddService;
    }

    @PostMapping("/add")
    public ResponseEntity<String> addItem(@RequestBody ItemDto itemDTO) {
        itemAddService.saveItem(itemDTO);
        String msg = "The item entered successfully";
        return ResponseEntity.ok(msg);
    }


}
