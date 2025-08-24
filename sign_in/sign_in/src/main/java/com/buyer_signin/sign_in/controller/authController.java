package com.buyer_signin.sign_in.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.buyer_signin.sign_in.service.BuyerService;         
import com.buyer_signin.sign_in.dto.signinRequest;          
import com.buyer_signin.sign_in.dto.signupRequest;           


@RestController
@RequestMapping("/auth")
public class authController {

    @Autowired
    private BuyerService authService;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody signupRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/signin")
    public ResponseEntity<String> signin(@RequestBody signinRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }
}
