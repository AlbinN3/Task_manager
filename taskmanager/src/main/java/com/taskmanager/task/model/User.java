package com.taskmanager.task.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    public User(){
    }

    public User(int id, String name) {
        this.id = id;
        this.name = name;
    }
}
