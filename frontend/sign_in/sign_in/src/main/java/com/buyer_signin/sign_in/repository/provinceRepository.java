package com.buyer_signin.sign_in.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.buyer_signin.sign_in.model.Province;

public interface provinceRepository extends JpaRepository<Province, Integer> {
    
}

