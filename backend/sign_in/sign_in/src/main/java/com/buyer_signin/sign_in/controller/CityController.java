package com.buyer_signin.sign_in.controller;

import org.springframework.web.bind.annotation.*;

import com.buyer_signin.sign_in.model.City;
import com.buyer_signin.sign_in.service.LoadCitiesService;

import java.util.List;

@RestController
@RequestMapping("/api/cities")
@CrossOrigin(origins = "http://localhost:3000") // allow React frontend

public class CityController {
    private final LoadCitiesService loadCitiesService;

    public CityController(LoadCitiesService loadCitiesService) {
        this.loadCitiesService = loadCitiesService;
    }

    @GetMapping
    public List<City> getCities() {
        return loadCitiesService.getAllCities();
    }
}
