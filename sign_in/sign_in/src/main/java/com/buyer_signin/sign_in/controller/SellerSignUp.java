package com.buyer_signin.sign_in.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class SellerSignUp {
    

    @GetMapping("/seller_signup")
    public String joinForm() {
        
        return "seller_signup"; // Thymeleaf template
    }

    @PostMapping("/sign_in/seller_signup")
    public String processJoin() {
        // Handle logic: save to DB, redirect, etc.
        return "seller_signup";
    }
    


    
}
