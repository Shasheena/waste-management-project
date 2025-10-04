package com.manageItem.item.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.manageItem.item.model.Item;

public interface ItemRepository extends JpaRepository<Item, Integer>{
    List<Item> findBySellerEmail(String sellerEmail);
}
