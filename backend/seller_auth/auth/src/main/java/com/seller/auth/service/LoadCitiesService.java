package com.seller.auth.service;

import org.springframework.stereotype.Service;

import com.seller.auth.model.City;
import com.seller.auth.repository.CityRepository;
import java.util.List;

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
