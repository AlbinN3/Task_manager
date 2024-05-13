package com.taskmanager.task.repository;
import com.taskmanager.task.model.Client;
import com.taskmanager.task.model.Users;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Transactional
@Repository
public interface ClientRepository extends JpaRepository<Client,Integer> {
    List<Client> findAll();

    @Modifying
    @Query(value = "DELETE FROM CLIENT WHERE CLIENTID=?;",nativeQuery = true)
    int deleteByClientId(int clientid);


}
