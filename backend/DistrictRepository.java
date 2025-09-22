package com.seller.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.seller.auth.model.District;

public interface DistrictRepository extends JpaRepository<District, Integer> {

}
