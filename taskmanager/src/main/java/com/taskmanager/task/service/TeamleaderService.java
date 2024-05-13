package com.taskmanager.task.service;

import com.taskmanager.task.model.Users;
import com.taskmanager.task.repository.TeamleaderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamleaderService {
    @Autowired
    TeamleaderRepository teamleaderRepository;
    public List<Users> findAllTeamleaders() { return teamleaderRepository.findAllTeamleaders();}
}
