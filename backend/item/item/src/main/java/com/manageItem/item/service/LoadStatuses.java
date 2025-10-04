package com.manageItem.item.service;

import java.util.List;
import org.springframework.stereotype.Service;

import com.manageItem.item.model.Status;
import com.manageItem.item.repository.StatusRepository;

@Service
public class LoadStatuses {
    private final StatusRepository statusRepository;

    public LoadStatuses(StatusRepository statusRepository) {
        this.statusRepository = statusRepository;
    }

    public List<Status> getAllStatuses() {
        return statusRepository.findAll();
    }
}
