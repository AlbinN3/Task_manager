package com.taskmanager.task.repository;

import com.taskmanager.task.model.Users;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Transactional
@Repository
public interface TeamleaderRepository extends JpaRepository<Users,Integer> {
    @Query(value = "select * from users where designation LIKE 'teamleader';",nativeQuery = true)
    List<Users> findAllTeamleaders();
}
