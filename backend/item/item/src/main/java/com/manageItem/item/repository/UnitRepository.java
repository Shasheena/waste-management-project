package com.manageItem.item.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.manageItem.item.model.Units;

public interface UnitRepository extends JpaRepository<Units, Integer> {

}
