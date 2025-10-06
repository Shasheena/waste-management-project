package com.buyer_signin.sign_in.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.buyer_signin.sign_in.model.City;
import com.buyer_signin.sign_in.repository.CityRepository;

@Service
public class LoadCitiesService {
    private final CityRepository cityRepository;

    public LoadCitiesService(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    public List<City> getAllCities() {
        return cityRepository.findAll();
    }
}
