package com.buyer_signin.sign_in.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class joinController {

    @GetMapping("/join")
    public String joinForm() {
        
        return "join_page"; // Thymeleaf template
    }

    @PostMapping("/sign_in/join")
    public String processJoin() {
        // Handle logic: save to DB, redirect, etc.
        return "join_page";
    }
    
}
