package com.taskmanager.task.service;

import com.taskmanager.task.model.Users;
import com.taskmanager.task.repository.DeveloperTesterRepository;
import com.taskmanager.task.repository.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeveloperTesterService {
    @Autowired
    DeveloperTesterRepository developerTesterRepository;
    public List<Users> findAllDeveloperTester() { return developerTesterRepository.findAllDeveloperTester();}
}
