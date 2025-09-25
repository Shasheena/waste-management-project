package com.seller.auth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.seller.auth.dto.SellerDto;
import com.seller.auth.service.SellerService;



@RestController
@RequestMapping("/api/sellers")
public class ApiController {

    private final SellerService sellerService;

    public ApiController(SellerService sellerService) {
        this.sellerService = sellerService;
    }

    @GetMapping("/by-email")
    public SellerDto getSellerByEmail(@RequestParam String email) {
        // Fetch seller from DB by email
        String seller = sellerService.findByEmail(email);
        return new SellerDto(
            seller
            
        );
    }
    
    
}
