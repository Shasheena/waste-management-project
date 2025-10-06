package com.seller.auth.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.seller.auth.dto.SellerDto;
import com.seller.auth.model.Seller;
import com.seller.auth.service.SellerService;



@RestController
@RequestMapping("/api/sellers")
@CrossOrigin(origins = "http://localhost:3000") // allow React frontend
public class ApiController {

    private final SellerService sellerService;

    public ApiController(SellerService sellerService) {
        this.sellerService = sellerService;
    }

    @GetMapping("/by-email")
    public SellerDto getSellerByEmail(@RequestParam String email) {
        Seller seller = sellerService.findByEmail(email);
        if (seller == null) {
            return null; // or throw exception
        }
        // Map entity to DTO
        return new SellerDto(
            seller.getEmail(),
            seller.getFname(),
            seller.getLname(),
            seller.getUsername(),
            seller.getAddress() != null ? seller.getAddress().getId() : 0,
            seller.getVersion()
        );
    }
    
    
}
