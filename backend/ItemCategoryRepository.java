package com.manageItem.item.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.manageItem.item.model.ItemCategory;

public interface ItemCategoryRepository extends JpaRepository<ItemCategory, Integer>{

}
