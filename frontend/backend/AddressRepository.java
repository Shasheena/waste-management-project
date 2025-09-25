package com.seller.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.seller.auth.model.Address;

public interface AddressRepository extends JpaRepository<Address, Integer> {

}
