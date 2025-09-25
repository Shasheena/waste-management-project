package com.buyer_signin.sign_in.service; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

import com.buyer_signin.sign_in.model.Address;
import com.buyer_signin.sign_in.model.District;
import com.buyer_signin.sign_in.model.Province;
import com.buyer_signin.sign_in.model.User;
import com.buyer_signin.sign_in.repository.addressRepository;
import com.buyer_signin.sign_in.repository.districtRepository;
import com.buyer_signin.sign_in.repository.provinceRepository;
import com.buyer_signin.sign_in.repository.userRepository; 
import com.buyer_signin.sign_in.dto.signupRequest; 
import com.buyer_signin.sign_in.dto.signinRequest; 


@Service
public class BuyerService {

    @Autowired
    private userRepository userRepository;

    @Autowired
    private addressRepository addressRepository;

    @Autowired
    private provinceRepository provinceRepository;

    @Autowired
    private districtRepository districtRepository;

    public String register(signupRequest request) {

        Province province = provinceRepository.findById(request.getProvince_id())
        .orElseThrow(() -> new RuntimeException("Province not found"));

        District district = districtRepository.findById(request.getDistrict_id())
        .orElseThrow(() -> new RuntimeException("District not found"));

        Address address = new Address();
        address.setCity(request.getCity());
        address.setDistrict_id(district);
        address.setProvince_id(province);
        address.setOther(request.getOther());
        address.setPostalCode(request.getPostalCode());
        Address saveAddress = addressRepository.save(address);

        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setFirst_name(request.getFirst_name());
        user.setLast_name(request.getLast_name());
        user.setAddress(saveAddress);

        userRepository.save(user);
        return "User registered successfully!";
    }

    public String login(signinRequest request) {
        Optional<User> userOpt = userRepository.findByEmail(request.getEmail());
        if (userOpt.isPresent() && userOpt.get().getPassword().equals(request.getPassword())) {
            return "Login successful!";
        }
        return "Invalid email or password!";
    }
}

