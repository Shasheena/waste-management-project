package com.manageItem.item.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manageItem.item.model.Status;
import com.manageItem.item.service.LoadStatuses;

@RestController
@RequestMapping("/api/statuses")
@CrossOrigin(origins = "http://localhost:3000") // allow React frontend

public class StatusController {
    private final LoadStatuses loadStatuses;

    public StatusController(LoadStatuses loadStatuses) {
        this.loadStatuses = loadStatuses;
    }

    @GetMapping
    public List<Status> getStatuses() {
        return loadStatuses.getAllStatuses();
    }
}
