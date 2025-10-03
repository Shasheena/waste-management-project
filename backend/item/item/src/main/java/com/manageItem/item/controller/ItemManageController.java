package com.manageItem.item.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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

    // @PostMapping("/add")
    // public ResponseEntity<String> addItem(@RequestBody ItemDto itemDTO) {
    //     itemAddService.saveItem(itemDTO);
    //     String msg = "The item entered successfully";
    //     return ResponseEntity.ok(msg);
    // }

    @PostMapping(value = "/add", consumes = {"multipart/form-data"})
    public ResponseEntity<String> addItem(
            @RequestPart("item") ItemDto itemDTO,
            @RequestPart("image") MultipartFile imageFile) {
        
        itemAddService.saveItem(itemDTO, imageFile);
        return ResponseEntity.ok("The item entered successfully");
    }

}
