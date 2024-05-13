package com.taskmanager.task.service;

import com.taskmanager.task.model.Users;
import com.taskmanager.task.repository.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManagerService {
    @Autowired
    ManagerRepository managerRepository;

    public List<Users> findAllManagers() { return managerRepository.findAllManagers();}
    }

