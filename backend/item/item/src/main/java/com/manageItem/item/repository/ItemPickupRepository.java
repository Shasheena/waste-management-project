package com.manageItem.item.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.manageItem.item.model.ItemPickup;

public interface ItemPickupRepository extends JpaRepository<ItemPickup, Integer>{
    long countByItemIdItem_SellerEmail(String sellerEmail);

    @Query("SELECT SUM(ip.totalPrice) FROM ItemPickup ip WHERE ip.itemIdItem.sellerEmail = :sellerEmail")
    Double sumTotalPriceBySeller(@Param("sellerEmail") String sellerEmail);
}
