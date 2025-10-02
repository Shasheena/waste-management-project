package com.manageItem.item.service;

import org.springframework.stereotype.Service;

import com.manageItem.item.model.ItemCategory;
import com.manageItem.item.repository.ItemCategoryRepository;

import java.util.List;

@Service
public class LoadCategoryService {
    private final ItemCategoryRepository itemCategoryRepository;

    public LoadCategoryService(ItemCategoryRepository itemCategoryRepository) {
        this.itemCategoryRepository = itemCategoryRepository;
    }

    public List<ItemCategory> getAllCategories() {
        return itemCategoryRepository.findAll();
    }
}
