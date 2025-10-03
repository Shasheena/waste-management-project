package com.manageItem.item.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manageItem.item.model.Status;

public interface StatusRepository extends JpaRepository<Status, Integer>{

}
