package com.taskmanager.task.dto;

import java.util.Date;

public class UsersWithProjectDTO {
    private int userid;
    private String username;
    private int projectid;
    private String projectname;
    private String duedate;

    public UsersWithProjectDTO(int userid, String username, int projectid, String projectname, Date duedate) {
        this.userid = userid;
        this.username = username;
        this.projectid = projectid;
        this.projectname = projectname;
        this.duedate = String.valueOf(duedate);
    }

    public int getUserid() {
        return userid;
    }

    public String getUsername() {
        return username;
    }

    public int getProjectid() {
        return projectid;
    }

    public String getProjectname() {
        return projectname;
    }

    public String getDuedate() {
        return duedate;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setProjectid(int projectid) {
        this.projectid = projectid;
    }

    public void setProjectname(String projectname) {
        this.projectname = projectname;
    }

    public void setDuedate(Date duedate) {
        this.duedate = String.valueOf(duedate);
    }

    public UsersWithProjectDTO() {
    }
}
