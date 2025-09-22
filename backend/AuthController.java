package com.seller.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.seller.auth.dto.SigninRequest;
import com.seller.auth.dto.SignupRequest;
import com.seller.auth.service.SellerAuthService;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private SellerAuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody SignupRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/signin")
    public ResponseEntity<String> signin(@RequestBody SigninRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }

}