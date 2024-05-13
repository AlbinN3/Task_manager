package com.taskmanager.task.service;

import com.taskmanager.task.model.Tasks;
import com.taskmanager.task.repository.TasksRepository;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TasksService {
    @Autowired
    TasksRepository tasksRepository;
    //TASK SERVICE
    public List<Tasks> findAllDeveloper(Integer userid) {return tasksRepository.findAllDeveloper(userid);
    }

    public List<Tasks> searchTasks(String taskname) {return tasksRepository.searchTasks(taskname);
    }
    public Tasks searchTasksid(Integer taskid) {return tasksRepository.searchTasksid(taskid);
    }
    public Tasks addMainTasks(Tasks tasks) {
        Tasks savedTask = tasksRepository.save(tasks);
        int generatedTaskId = savedTask.getTaskid();
        tasksRepository.saveMaintask(generatedTaskId);
        return savedTask;
    }

    public int deleteById(int taskid) {return tasksRepository.deleteByDesignationId(taskid);
    }

    public List<Tasks> findAllTeamleader(Integer userid) {
        return tasksRepository.findAllTeamleader(userid);
    }

    public Tasks addSubTasks(Tasks tasks) {return tasksRepository.save(tasks);
    }
    public List<Tasks> findAllSubtaskTeamleader(Integer userid,Integer mainTaskid) {
        return tasksRepository.findAllSubtaskTeamleader(userid,mainTaskid);
    }

    public Tasks findAllTaskWithId(Integer taskid) {
        return tasksRepository.findAllTaskWithId(taskid);
    }

    public List<Tasks> findAllTester(Integer maintaskid,Integer taskid) {return tasksRepository.findAllTester(maintaskid,taskid);
    }

    public List<Tasks> searchTasksTester(String taskname,Integer maintaskid,Integer taskid) {return tasksRepository.searchTasksTester(taskname,maintaskid,taskid);
    }
}
