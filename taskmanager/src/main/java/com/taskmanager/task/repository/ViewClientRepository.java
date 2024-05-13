package com.taskmanager.task.repository;

import com.taskmanager.task.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ViewClientRepository extends JpaRepository<Users,Integer> {
    @Query(value = "select * from users where designation LIKE 'client';",nativeQuery = true)
    List<Users> findAllClientDetails();
}
