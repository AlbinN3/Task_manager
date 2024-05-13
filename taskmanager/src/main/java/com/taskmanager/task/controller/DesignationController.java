package com.taskmanager.task.controller;

import com.taskmanager.task.model.Designation;
import com.taskmanager.task.service.DesignationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class DesignationController {
    @Autowired
    DesignationService designationService;
    //DESIGNATION CONTROL
    @GetMapping("/designation/all")
    public List<Designation> findAllDesignation(){
        return designationService.findAllDesignation();
    }

    @GetMapping("/designation/search")
    public List<Designation> searchDesignnation(@RequestParam("designationName") String designame){
        return designationService.searchDesignation(designame);
    }

    @PostMapping("/designation/add")
    Designation addDesignnation(@RequestBody Designation designation)
    {
        return designationService.addDesignation(designation);
    }
    @DeleteMapping("/designation/delete")
    int deleteDesignation(@RequestParam("designationId") int designationid) {
        return designationService.deleteById(designationid);
    }
}
