package com.seller.auth.service;

import org.springframework.stereotype.Service;
import com.seller.auth.model.Address;
import com.seller.auth.repository.AddressRepository;


@Service
public class AddressService {

    private final AddressRepository addressRepository;

    public AddressService(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    public Address findById(int id) {
        // Optional<Address> addressOpt = addressRepository.findById(id);
        // return addressOpt.orElse(null); // return null if not found
        return addressRepository.findByIdWithDetails(id);
    }
}
