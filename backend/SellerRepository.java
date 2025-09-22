package com.seller.auth.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.seller.auth.model.Seller;

@Repository
public interface SellerRepository extends JpaRepository<Seller, String> {
    Optional<Seller> findByEmail(String sellerEmail);
}
