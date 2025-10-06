package com.buyer_signin.sign_in.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.buyer_signin.sign_in.model.District;
import com.buyer_signin.sign_in.service.LoadDistrictsService;

@RestController
@RequestMapping("/api/districts")
@CrossOrigin(origins = "http://localhost:3000") // allow React frontend

public class DistrictController {
    private final LoadDistrictsService loadDistrictsService;

    public DistrictController(LoadDistrictsService loadDistrictsService) {
        this.loadDistrictsService = loadDistrictsService;
    }

    @GetMapping
    public List<District> getDistricts() {
        return loadDistrictsService.getAllDistricts();
    }
}
