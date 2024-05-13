package com.taskmanager.task.repository;

import com.taskmanager.task.model.Project;
import com.taskmanager.task.model.Users;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Transactional
@Repository
public interface ProjectRepository extends JpaRepository<Project,Integer> {

    List<Project> findAll();
    @Query(value="SELECT * FROM project WHERE projectname LIKE CONCAT('%', :projectname, '%')", nativeQuery=true)
    List<Project> searchProject(String projectname);
    @Modifying
    @Query(value="DELETE FROM PROJECT WHERE PROJECTID=?;",nativeQuery = true)
    int deleteByDesignationId(int projectid);

    @Query(value="SELECT * FROM project WHERE projectid=?;",nativeQuery = true)
    Project findByProjectId(int id);
}
