package com.taskmanager.task.controller;

import com.taskmanager.task.model.Users;
import com.taskmanager.task.service.ManagerService;
import com.taskmanager.task.service.TeamleaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class ViewTeamleaderController {
    @Autowired
    TeamleaderService teamleaderService;
    @GetMapping("/teamleader/all")
    public List<Users> findAllTeamleaders(){
        return teamleaderService.findAllTeamleaders();
    }
}
