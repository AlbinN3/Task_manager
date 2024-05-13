package com.taskmanager.task.controller;

import com.taskmanager.task.model.Tasks;
import com.taskmanager.task.service.TasksService;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class TasksController {
    @Autowired
    TasksService tasksService;
    //TASKS CONTROL
    @GetMapping("/task/developer/all")
    public List<Tasks> findAllDeveloper(@RequestParam("userId") Integer userid){
        return tasksService.findAllDeveloper(userid);
    }
    @GetMapping("/task/taskid/all")
    public Tasks findAllTaskWithId(@RequestParam("taskId") Integer taskid){
        return tasksService.findAllTaskWithId(taskid);
    }
    @GetMapping("/task/teamleader/all")
    public List<Tasks> findAllTeamleader(@RequestParam("userId") Integer userid){return tasksService.findAllTeamleader(userid);}
    @GetMapping("/task/search")
    public List<Tasks> searchTasks(@RequestParam("taskName") String taskname){
        return tasksService.searchTasks(taskname);
    }

    @GetMapping("/task/searchid")
    public Tasks searchTasksId(@RequestParam("taskId") Integer taskid){
        return tasksService.searchTasksid(taskid);
    }
    @PostMapping("/task/teamleader/maintask/add")
    Tasks addMainTasks(@RequestBody Tasks tasks)
    {
        return tasksService.addMainTasks(tasks);
    }
    @PostMapping("/task/teamleader/subtask/add")
    Tasks addSubTasks(@RequestBody Tasks tasks)
    {
        return tasksService.addSubTasks(tasks);
    }
    @DeleteMapping("/task/delete")
    int deleteTask(@RequestParam("taskId") int taskid) {
        return tasksService.deleteById(taskid);
    }

    @GetMapping("/task/teamleader/subtask/all")
    public List<Tasks> findAllSubtaskTeamleader(@RequestParam("userId") Integer userid,@RequestParam("mainTaskId") Integer mainTaskid){return tasksService.findAllSubtaskTeamleader(userid,mainTaskid);}

    @GetMapping("/task/tester/all")
    public List<Tasks> findAllTester(@RequestParam("maintaskId") Integer maintaskid,@RequestParam("taskId") Integer taskid){
        return tasksService.findAllTester(maintaskid,taskid);
    }

    @GetMapping("/task/tester/search")
    public List<Tasks> searchTasksTester(@RequestParam("taskName") String taskname, @RequestParam("maintaskId") Integer maintaskid,@RequestParam("taskId") Integer taskid){
        return tasksService.searchTasksTester(taskname,maintaskid,taskid);
    }

}