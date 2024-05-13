package com.taskmanager.task.model;

import lombok.Data;

import java.util.List;

@Data
public class ResponseEntity {
    List<Users> userList;
}
