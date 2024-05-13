package com.taskmanager.task.dto;

import java.math.BigDecimal;

public class ClientProjectProgressDTO {
    private int userid;
    private String username;
    private int projectid;
    private String projectname;
    private BigDecimal progress;

    public ClientProjectProgressDTO() {
    }

    public ClientProjectProgressDTO(int userid, String username, int projectid, String projectname, BigDecimal progress) {
        this.userid = userid;
        this.username = username;
        this.projectid = projectid;
        this.projectname = projectname;
        this.progress = progress;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getProjectid() {
        return projectid;
    }

    public void setProjectid(int projectid) {
        this.projectid = projectid;
    }

    public String getProjectname() {
        return projectname;
    }

    public void setProjectname(String projectname) {
        this.projectname = projectname;
    }

    public BigDecimal getProgress() {
        return progress;
    }

    public void setProgress(BigDecimal progress) {
        this.progress = progress;
    }
}
