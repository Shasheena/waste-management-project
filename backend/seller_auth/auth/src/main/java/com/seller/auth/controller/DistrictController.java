package com.seller.auth.controller;
import java.util.List;

import org.springframework.web.bind.annotation.*;
import com.seller.auth.model.District;
import com.seller.auth.service.LoadDistrictsService;

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
