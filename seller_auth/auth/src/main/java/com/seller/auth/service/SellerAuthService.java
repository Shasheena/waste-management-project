package com.seller.auth.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seller.auth.dto.SigninRequest;
import com.seller.auth.dto.SignupRequest;
import com.seller.auth.model.Address;
import com.seller.auth.model.District;
import com.seller.auth.model.Province;
import com.seller.auth.model.Seller;
import com.seller.auth.repository.AddressRepository;
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

    public String register(SignupRequest request) {

        Province province = provinceRepository.findById(request.getProvince_id())
        .orElseThrow(() -> new RuntimeException("Province not found"));

        District district = districtRepository.findById(request.getDistrict_id())
        .orElseThrow(() -> new RuntimeException("District not found"));

        Address address = new Address();
        address.setCity(request.getCity());
        address.setDistrict(district);
        address.setProvince(province);
        address.setOther(request.getOther());
        address.setPostalCode(request.getPostalCode());
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

    public String login(SigninRequest request) {
        Optional<Seller> sellerOpt = sellerRepository.findByEmail(request.getSeller_email());
        if (sellerOpt.isPresent() && sellerOpt.get().getPassword().equals(request.getSeller_password())) {
            return "Login successful!";
        }
        return "Invalid email or password!";
    }

}
