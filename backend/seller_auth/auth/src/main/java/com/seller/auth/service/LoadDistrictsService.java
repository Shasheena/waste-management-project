package com.seller.auth.service;

import org.springframework.stereotype.Service;
import com.seller.auth.model.District;
import com.seller.auth.repository.DistrictRepository;
import java.util.List;

@Service
public class LoadDistrictsService {
    private final DistrictRepository districtRepository;

    public LoadDistrictsService(DistrictRepository districtRepository) {
        this.districtRepository = districtRepository;
    }

    public List<District> getAllDistricts() {
        return districtRepository.findAll();
    }
}
