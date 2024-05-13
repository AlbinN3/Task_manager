package com.taskmanager.task.repository;
import com.taskmanager.task.model.Client;
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
public interface UserRepository extends JpaRepository<Users, Integer> {
    //Method for getting All user details
    List<Users> findAll();
    @Query(value="SELECT * FROM users JOIN project ON users.userid = project.clientid;",nativeQuery = true)
    List<Object[]> findAllClient();
    @Query(value="SELECT * FROM users JOIN project ON users.userid = project.clientid WHERE username LIKE CONCAT('%', :username, '%') ;", nativeQuery=true)
    List<Object[]> searchClient(String username);
    @Query(value="SELECT * FROM users WHERE username LIKE CONCAT('%', :name, '%')", nativeQuery=true)
    List<Users> searchUserByName(String name);

    @Query(value="SELECT * FROM USERS WHERE username=? AND password=?;", nativeQuery=true)
    Users validateUserNameAndPassword(String username,String password);
    @Modifying
    @Query(value="DELETE FROM USERS WHERE USERID=?;",nativeQuery = true)
    int deleteByUserId(int userid);
    //Dashboard common
    @Query(value="SELECT * FROM users WHERE userid=?;",nativeQuery = true)
    Users findByUserId(Integer userid);
    long count();
    @Query(value="SELECT COUNT(*) FROM users JOIN tasks ON users.userid = tasks.userid WHERE users.userid=? AND users.designation = 'developer' AND tasks.progress = 100;",nativeQuery = true)
    int countOfCompleteTasks(int userid);
    @Query(value="select count(*) from tasks where progress<100;", nativeQuery = true)
    int countTaskInProgress();
    @Query(value="select count(*) from tasks where progress=100;",nativeQuery = true)
    int countCompletedTask();
    @Query(value="select count(*) from tasks;",nativeQuery = true)
    int countTotalTask();
    @Query(value="select count(*) from project;",nativeQuery = true)
    int countTotalProject();
    @Query(value="SELECT COUNT(*) AS completed_projects FROM ( SELECT p.projectid FROM project p INNER JOIN tasks t ON p.projectid = t.projectid GROUP BY p.projectid HAVING AVG(t.progress) = 100 ) AS completed_projects;",nativeQuery = true)
    int countProjectCompleted();
    //Dashboard Common
    @Query(value="SELECT avg(progress),project.projectid,users.userid,users.username,project.projectname FROM project JOIN users ON project.clientid = users.userid JOIN tasks ON project.projectid = tasks.projectid  where users.userid=? and tasks.taskid<>tasks.maintaskid group by project.projectid;",nativeQuery = true)
    List<Object[]> searchProgress(int clientid);
    @Query(value="Select * from users where designation='teamleader' or designation='tester' or designation='developer';",nativeQuery = true)
    List<Users> allUserUnderManager();
    @Query(value="SELECT * FROM users WHERE username like concat( ?, '%') AND designation IN ('teamleader', 'tester', 'developer');",nativeQuery = true)
    List<Users> searchUserUnderManager(String name);
    @Query(value="Select * from users where designation='tester' or designation='developer';",nativeQuery = true)
    List<Users> allUserUnderTeamleader();
    @Query(value="SELECT * FROM users WHERE username like concat( ?, '%') AND designation IN ('tester', 'developer');",nativeQuery = true)
    List<Users> searchUserUnderTeamleader(String name);
}
