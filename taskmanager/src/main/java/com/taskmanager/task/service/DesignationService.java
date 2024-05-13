package com.taskmanager.task.service;

import com.taskmanager.task.model.Designation;
import com.taskmanager.task.model.Project;
import com.taskmanager.task.repository.DesignationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DesignationService {
    @Autowired
    DesignationRepository designationRepository;
    //DESIGNATION SERVICE
    public List<Designation> findAllDesignation() {return designationRepository.findAll();
    }
    public List<Designation> searchDesignation(String designame) {
        return designationRepository.searchDesignation(designame);
    }
    public Designation addDesignation(Designation designation) {
        return designationRepository.save(designation);
    }

    public int deleteById(int designationid) {return designationRepository.deleteByDesignationId(designationid);
    }
}
