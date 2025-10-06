package com.manageItem.item.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.manageItem.item.service.ItemPickupService;

@RestController
@RequestMapping("/api/pickup")
@CrossOrigin(origins = "http://localhost:3000") // React frontend
public class ItemPickupController {

    @Autowired
    private ItemPickupService itemPickupService;

    @PostMapping("/add")
    public ResponseEntity<String> addPickup(
            @RequestParam int itemId,
            @RequestParam String buyerEmail,
            @RequestParam double totalQty,
            @RequestParam double totalPrice) {

        String message = itemPickupService.addPickup(itemId, buyerEmail, totalQty, totalPrice);

        if (message.startsWith("Pickup added")) {
            return ResponseEntity.ok(message);
        } else {
            return ResponseEntity.badRequest().body(message);
        }
    }

    @GetMapping("/stats-by-seller")
    public ResponseEntity<Map<String, Object>> getPickupStatsBySeller(@RequestParam String sellerEmail) {
        long totalPickups = itemPickupService.countPickupsBySeller(sellerEmail);
        double totalEarnings = itemPickupService.sumTotalPriceBySeller(sellerEmail);

        Map<String, Object> response = new HashMap<>();
        response.put("totalPickups", totalPickups);
        response.put("totalEarnings", totalEarnings);

        return ResponseEntity.ok(response);
    }

}
