package com.seller.auth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import com.seller.auth.model.Address;
import com.seller.auth.dto.AddressDto;
import com.seller.auth.service.AddressService;

@RestController
@RequestMapping("/api/address")
public class AddressController {

    private final AddressService addressService;

    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @GetMapping("/by-id")
    public AddressDto getAddressById(@RequestParam int id) {
        Address address = addressService.findById(id);
        System.out.println("Received request for address id: " + id);
        if (address == null){
            System.out.println("Address not found for id: " + id);
            return null;}
            System.out.println("City: " + address.getCity());
    System.out.println("District: " + address.getDistrict());
    System.out.println("Province: " + address.getProvince());
    System.out.println("Other: " + address.getOther());
        return new AddressDto(
                address.getCity().getCity_name(),
                address.getDistrict().getDistrict_name(),
                address.getProvince().getProvince_name(),
                address.getOther());
    }
}
