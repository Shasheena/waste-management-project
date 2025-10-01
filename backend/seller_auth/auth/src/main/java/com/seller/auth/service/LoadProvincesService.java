package com.seller.auth.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.seller.auth.model.Province;
import com.seller.auth.repository.ProvinceRepository;

@Service
public class LoadProvincesService {
    private final ProvinceRepository provinceRepository;

    public LoadProvincesService(ProvinceRepository provinceRepository) {
        this.provinceRepository = provinceRepository;
    }

    public List<Province> getAllProvinces() {
        return provinceRepository.findAll();
    }

    
}
