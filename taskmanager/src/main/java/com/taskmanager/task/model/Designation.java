package com.taskmanager.task.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Designation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int designationid;
    private String designationname;

    public Designation() {
    }

    public Designation(int designationid, String designationname) {
        this.designationid = designationid;
        this.designationname = designationname;
    }
}
