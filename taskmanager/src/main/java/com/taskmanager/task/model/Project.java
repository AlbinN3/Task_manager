package com.taskmanager.task.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;


@Entity
@Data
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int projectid;
    private String projectname;
    private String startdate;
    private String duedate;
    private int managerid;
    private int teamleaderid;
    private int clientid;
    private String description;
    public Project(){
    }
}
