package com.seller.auth.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import com.seller.auth.model.Province;
import com.seller.auth.service.LoadProvincesService;

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
