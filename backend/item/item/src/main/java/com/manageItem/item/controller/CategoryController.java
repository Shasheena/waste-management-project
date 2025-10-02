package com.manageItem.item.controller;

import java.util.List;
import org.springframework.web.bind.annotation.*;

import com.manageItem.item.model.ItemCategory;
import com.manageItem.item.service.LoadCategoryService;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "http://localhost:3000") // allow React frontend

public class CategoryController {
    private final LoadCategoryService loadCategoryService;

    public CategoryController(LoadCategoryService loadCategoryService) {
        this.loadCategoryService = loadCategoryService;
    }

    @GetMapping
    public List<ItemCategory> getCategories() {
        return loadCategoryService.getAllCategories();
    }
}
