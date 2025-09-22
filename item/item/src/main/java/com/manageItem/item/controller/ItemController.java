package com.manageItem.item.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.manageItem.item.dto.SellerInfoDto;
import com.manageItem.item.model.Item;
import com.manageItem.item.service.SellerClientService;
import com.manageItem.item.service.ItemAddService;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    private final SellerClientService sellerClientService;
    private final ItemAddService itemAddService;

    public ItemController(SellerClientService sellerClientService, ItemAddService itemAddService) {
        this.sellerClientService = sellerClientService;
        this.itemAddService = itemAddService;
    }
    

    @GetMapping("/seller")
    public Mono<SellerInfoDto> getSeller(@RequestParam String email) {
        return sellerClientService.getSellerByEmail(email);
    }

    // PUT request for updating item
    @PutMapping("/{id}")
    public Item updateItem(@PathVariable int id, @RequestBody Item updatedItem) {
        return itemAddService.updateItem(id, updatedItem);
    }

    // DELETE request for deleting item
    @DeleteMapping("/{id}")
    public String deleteItem(@PathVariable int id) {
        itemAddService.deleteItem(id);
        return "Item with id " + id + " deleted successfully";
    }
}

