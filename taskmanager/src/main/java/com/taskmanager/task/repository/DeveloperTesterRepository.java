package com.taskmanager.task.repository;

import com.taskmanager.task.model.Users;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Transactional
@Repository
public interface DeveloperTesterRepository extends JpaRepository<Users, Integer> {
    @Query(value = "SELECT * FROM users WHERE designation IN ('developer', 'tester');",nativeQuery = true)
    List<Users> findAllDeveloperTester();
}
