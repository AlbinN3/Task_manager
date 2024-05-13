package com.taskmanager.task.repository;

import com.taskmanager.task.model.Designation;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Transactional
@Repository
public interface DesignationRepository extends JpaRepository<Designation,Integer> {
    List<Designation> findAll();
    @Query(value="SELECT * FROM designation WHERE designationname=?;", nativeQuery=true)
    List<Designation> searchDesignation(String designame);
    @Modifying
    @Query(value="DELETE FROM DESIGNATION WHERE DESIGNATIONID=?;",nativeQuery = true)
    int deleteByDesignationId(int designationid);
}
