package com.buyer_signin.sign_in.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.buyer_signin.sign_in.model.City;

public interface CityRepository extends JpaRepository<City, Integer>{

}
