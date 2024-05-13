package com.taskmanager.task.controller;

import com.taskmanager.task.model.Users;
import com.taskmanager.task.service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class ViewManagerController {
    @Autowired
    ManagerService managerService;

    @GetMapping("/manager/all")
    public List<Users> findAllManagers(){
        return managerService.findAllManagers();
    }
}
