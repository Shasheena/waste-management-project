package com.seller.auth.service;

import org.springframework.stereotype.Service;

import com.seller.auth.repository.SellerRepository;

@Service
public class SellerService {

    private  SellerRepository sellerRepository; 

    public SellerService(SellerRepository sellerRepository) {
        this.sellerRepository = sellerRepository;
    }

    public String findByEmail(String email) {
        // Fetch seller from DB by email
        return sellerRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Seller not found with email: " + email)).getEmail();
    }
    
}

    
