package com.taskmanager.task.service;

import com.taskmanager.task.model.Project;
import com.taskmanager.task.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProjectService {
    @Autowired
    ProjectRepository projectRepository;
    //PROJECT SERVICE
    public List<Project> findAllProject() {return projectRepository.findAll();
    }
    public List<Project> searchProject(String projname) {return projectRepository.searchProject(projname);
    }
    public Project addProject(Project project) {return projectRepository.save(project);
    }

    public int deleteById(int projectid) {return projectRepository.deleteByDesignationId(projectid);
    }

    public Project getProjectById(Integer projectId) {
        return projectRepository.findByProjectId(projectId);
    }
}
