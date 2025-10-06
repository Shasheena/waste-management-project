package com.buyer_signin.sign_in.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.buyer_signin.sign_in.model.Province;
import com.buyer_signin.sign_in.repository.provinceRepository;

@Service
public class LoadProvincesService {
    private final provinceRepository ProvinceRepository;

    public LoadProvincesService(provinceRepository ProvinceRepository) {
        this.ProvinceRepository = ProvinceRepository;
    }

    public List<Province> getAllProvinces() {
        return ProvinceRepository.findAll();
    }
}
