package com.manageItem.item.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.manageItem.item.model.InterestedItem;
import com.manageItem.item.model.Item;

public interface InterestedItemRepository extends JpaRepository<InterestedItem, Integer>{
    List<InterestedItem> findByBuyerEmail(String buyerEmail);
    int countByItemIdItem(Item item);
    long countByItemIdItem_SellerEmail(String sellerEmail);
}
