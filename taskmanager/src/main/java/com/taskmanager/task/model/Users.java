package com.taskmanager.task.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userid;
    private String username;
    private String email;
    private String designation;
    private String password;
    public Users(){
    }

    public Users(int userid, String username, String email, String designation, String password) {
        this.userid = userid;
        this.username = username;
        this.email = email;
        this.designation = designation;
        this.password = password;
    }


}
