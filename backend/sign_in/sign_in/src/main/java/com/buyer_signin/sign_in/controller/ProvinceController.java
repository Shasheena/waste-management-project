package com.buyer_signin.sign_in.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.buyer_signin.sign_in.model.Province;
import com.buyer_signin.sign_in.service.LoadProvincesService;

@RestController
@RequestMapping("/api/provinces")
@CrossOrigin(origins = "http://localhost:3000") // allow React frontend
public class ProvinceController {

    private final LoadProvincesService loadProvincesService;

    public ProvinceController(LoadProvincesService loadProvincesService) {
        this.loadProvincesService = loadProvincesService;
    }

    @GetMapping
    public List<Province> getDistricts() {
        return loadProvincesService.getAllProvinces();
    }
    
}
