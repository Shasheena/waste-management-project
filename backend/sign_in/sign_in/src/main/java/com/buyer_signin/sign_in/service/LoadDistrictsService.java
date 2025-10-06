package com.buyer_signin.sign_in.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.buyer_signin.sign_in.model.District;
import com.buyer_signin.sign_in.repository.districtRepository;

@Service
public class LoadDistrictsService {
    private final districtRepository DistrictRepository;

    public LoadDistrictsService(districtRepository DistrictRepository) {
        this.DistrictRepository = DistrictRepository;
    }

    public List<District> getAllDistricts() {
        return DistrictRepository.findAll();
    }
}
