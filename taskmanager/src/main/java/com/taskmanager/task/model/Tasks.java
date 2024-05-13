package com.taskmanager.task.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Tasks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int taskid;
    private String startdate;
    private String duedate;
    private int progress;
    private int priority;
    private String taskname;
    private String description;
    private int projectid;
    private int teamleaderid;
    private int userid;
    private int maintaskid;
    private String issues;
    private String gitlink;
    public Tasks(){
    }

}
