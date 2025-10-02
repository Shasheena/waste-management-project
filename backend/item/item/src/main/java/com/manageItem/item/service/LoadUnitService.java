package com.manageItem.item.service;

import org.springframework.stereotype.Service;

import com.manageItem.item.model.Units;
import com.manageItem.item.repository.UnitRepository;

import java.util.List;

@Service
public class LoadUnitService {
    private final UnitRepository unitRepository;

    public LoadUnitService(UnitRepository unitRepository) {
        this.unitRepository = unitRepository;
    }

    public List<Units> getAllUnits() {
        return unitRepository.findAll();
    }
}
