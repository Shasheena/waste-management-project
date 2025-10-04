package com.manageItem.item.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.manageItem.item.model.InterestedItem;
import com.manageItem.item.model.Item;

public interface InterestedItemRepository extends JpaRepository<InterestedItem, Integer>{
    int countByItemIdItem(Item item);
}
