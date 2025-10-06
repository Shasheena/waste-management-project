package com.manageItem.item.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.manageItem.item.dto.InterestedItemDto;
import com.manageItem.item.model.InterestedItem;
import com.manageItem.item.service.InterestedItemService;

@RestController
@RequestMapping("/api/interests")
@CrossOrigin(origins = "http://localhost:3000") // Adjust to your frontend port
public class InterestedItemController {

    @Autowired
    private InterestedItemService interestedItemService;

    @PostMapping("/add")
    public InterestedItem addInterest(
            @RequestParam int itemId,
            @RequestParam String buyerEmail,
            @RequestParam double totalQuantity) {

        return interestedItemService.addInterestedItem(itemId, buyerEmail, totalQuantity);
    }

    @GetMapping("/buyer")
    public List<InterestedItemDto> getBuyerInterests(@RequestParam String buyerEmail) {
        return interestedItemService.getInterestsByBuyer(buyerEmail);
    }

    @GetMapping("/item")
    public InterestedItem getInterestedItemById(@RequestParam int id) {
        return interestedItemService.getInterestedItemById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteInterest(@PathVariable int id) {
        interestedItemService.deleteInterestedItem(id);
        return "Item removed from interest list successfully.";
    }

    @GetMapping("/count-by-seller")
    public ResponseEntity<Long> countInterestedItemsBySeller(@RequestParam String sellerEmail) {
        long count = interestedItemService.countBySellerEmail(sellerEmail);
        return ResponseEntity.ok(count);
    }

}
