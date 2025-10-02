package com.seller.auth.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seller.auth.dto.SigninRequest;
import com.seller.auth.dto.SignupRequest;
import com.seller.auth.model.Address;
import com.seller.auth.model.City;
import com.seller.auth.model.District;
import com.seller.auth.model.Province;
import com.seller.auth.model.Seller;
import com.seller.auth.repository.AddressRepository;
import com.seller.auth.repository.CityRepository;
import com.seller.auth.repository.DistrictRepository;
import com.seller.auth.repository.ProvinceRepository;
import com.seller.auth.repository.SellerRepository;

@Service
public class SellerAuthService {

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private DistrictRepository districtRepository;

    @Autowired
    private ProvinceRepository provinceRepository;

    @Autowired
    private SellerRepository sellerRepository;

    @Autowired
    private CityRepository cityRepository;

    public String register(SignupRequest request) {

        Province province = provinceRepository.findById(request.getProvince_id())
        .orElseThrow(() -> new RuntimeException("Province not found"));

        District district = districtRepository.findById(request.getDistrict_id())
        .orElseThrow(() -> new RuntimeException("District not found"));

        City city = cityRepository.findById(request.getCity_id())
        .orElseThrow(() -> new RuntimeException("City not found"));

        Address address = new Address();
        address.setCity(city);
        address.setDistrict(district);
        address.setProvince(province);
        address.setOther(request.getOther());
        // address.setPostalCode(request.getPostalCode());
        Address saveAddress = addressRepository.save(address);

        Seller seller = new Seller();
        seller.setUsername(request.getSeller_username());
        seller.setEmail(request.getSeller_email());
        seller.setPassword(request.getSeller_password());
        seller.setFname(request.getSeller_fname());
        seller.setLname(request.getSeller_lname());
        seller.setAddress(saveAddress);

        sellerRepository.save(seller);
        return "User registered successfully!";
    }

    public Map<String, Object> login(SigninRequest request) {
        Optional<Seller> sellerOpt = sellerRepository.findByEmail(request.getSeller_email());
        Map<String, Object> response = new HashMap<>();
        
        if (sellerOpt.isPresent() && sellerOpt.get().getPassword().equals(request.getSeller_password())) {
            Seller seller = sellerOpt.get();
            response.put("status", "success");
            response.put("email", seller.getEmail());
            return response;
        }
        response.put("status", "error");
        response.put("message", "Invalid email or password!");
        return response;
    }

    // public String login(SigninRequest request) {
    //     Optional<Seller> sellerOpt = sellerRepository.findByEmail(request.getSeller_email());
    //     if (sellerOpt.isPresent() && sellerOpt.get().getPassword().equals(request.getSeller_password())) {
    //         return "Login successful!";
    //     }
    //     return "Invalid email or password!";
    // }

}
