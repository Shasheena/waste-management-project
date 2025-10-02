package com.manageItem.item.controller;

import java.util.List;
import org.springframework.web.bind.annotation.*;

import com.manageItem.item.model.Units;
import com.manageItem.item.service.LoadUnitService;

@RestController
@RequestMapping("/api/units")
@CrossOrigin(origins = "http://localhost:3000") // allow React frontend

public class UnitController {
   private final LoadUnitService loadUnitService;

   public UnitController(LoadUnitService loadUnitService) {
    this.loadUnitService = loadUnitService;
   }

   @GetMapping
    public List<Units> getUnits() {
        return loadUnitService.getAllUnits();
    }
    
}
