package com.seller.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.seller.auth.model.Address;

public interface AddressRepository extends JpaRepository<Address, Integer> {
    @Query("SELECT a FROM Address a " +
           "LEFT JOIN FETCH a.city " +
           "LEFT JOIN FETCH a.province " +
           "LEFT JOIN FETCH a.district " +
           "WHERE a.address_id = :id")
    Address findByIdWithDetails(@Param("id") int id);
}
