package com.taskmanager.task.controller;

import com.taskmanager.task.model.Project;
import com.taskmanager.task.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ProjectController {
    @Autowired
    ProjectService projectService;
    //PROJECT CONTROL
    @GetMapping("/project/all")
    public List<Project> findAllProject(){
        return projectService.findAllProject();
    }

    @GetMapping("/project/search/{projectname}")
    public List<Project> searchProject(@PathVariable String projectname){
        return projectService.searchProject(projectname);
    }

    @GetMapping("/project/getproject")
    public Project getProjectById(@RequestParam("projectid") Integer projectId){
        return projectService.getProjectById(projectId);
    }

    @PostMapping("/project/add")
    Project addProject(@RequestBody Project project)
    {
        return projectService.addProject(project);
    }
    @DeleteMapping("/project/delete/{projectid}")
    int deleteProject(@PathVariable int projectid) {
        return projectService.deleteById(projectid);
    }


}
