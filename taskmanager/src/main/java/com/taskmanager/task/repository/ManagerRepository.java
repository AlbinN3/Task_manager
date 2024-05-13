package com.taskmanager.task.repository;

import com.taskmanager.task.model.Project;
import com.taskmanager.task.model.Users;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Transactional
@Repository
public interface ManagerRepository extends JpaRepository<Users,Integer> {
    @Query(value = "select * from users where designation LIKE 'manager';",nativeQuery = true)
    List<Users> findAllManagers();
}
