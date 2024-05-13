package com.taskmanager.task.controller;

import com.taskmanager.task.model.Users;
import com.taskmanager.task.service.ClientService;
import com.taskmanager.task.service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class ViewClientController {
    @Autowired
    ClientService clientService;

    @GetMapping("/client/allclient")
    public List<Users> findAllClientDetails(){
        return clientService.findAllClientDetails();
    }
}
