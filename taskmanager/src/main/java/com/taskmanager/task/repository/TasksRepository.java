package com.taskmanager.task.repository;
import com.taskmanager.task.model.Tasks;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Transactional
@Repository
public interface TasksRepository extends JpaRepository<Tasks, Integer> {
    @Query(value="SELECT tasks.* FROM tasks JOIN users ON tasks.userid = users.userid WHERE tasks.userid = ? and tasks.taskid<>tasks.maintaskid;",nativeQuery = true)
    List<Tasks> findAllDeveloper(Integer user);
    @Query(value="SELECT * FROM tasks WHERE taskname like concat( ?, '%');", nativeQuery=true)
    List<Tasks> searchTasks(String taskname);
    @Query(value="SELECT * FROM tasks WHERE taskid=?;", nativeQuery=true)
    Tasks searchTasksid(Integer taskid);
    @Modifying
    @Query(value="DELETE FROM TASKS WHERE TASKID=?;",nativeQuery = true)
    int deleteByDesignationId(int taskid);

    @Query(value="SELECT tasks.* FROM tasks JOIN users ON tasks.teamleaderid = users.userid WHERE tasks.teamleaderid = ? and tasks.taskid=tasks.maintaskid;",nativeQuery = true)
    List<Tasks> findAllTeamleader(Integer userid);
    @Modifying
    @Query(value="update tasks set maintaskid=taskid where taskid=?;",nativeQuery = true)
    void saveMaintask(int generatedTaskId);
    @Query(value="SELECT tasks.* FROM tasks JOIN users ON tasks.teamleaderid = users.userid WHERE tasks.teamleaderid = ? and tasks.taskid<>tasks.maintaskid and tasks.maintaskid=?;",nativeQuery = true)
    List<Tasks> findAllSubtaskTeamleader(Integer userid, Integer mainTaskid);
    @Query(value="select * from tasks where taskid=?;",nativeQuery = true)
    Tasks findAllTaskWithId(Integer taskid);

    @Query(value="select * from tasks where maintaskid=? and taskid<>maintaskid and taskid<>?;",nativeQuery = true)
    List<Tasks> findAllTester(Integer maintaskid,Integer taskid);

    @Query(value="SELECT * FROM tasks WHERE taskname LIKE CONCAT(?, '%') AND maintaskid = ? AND taskid <> maintaskid AND taskid <> ?;\n", nativeQuery=true)
    List<Tasks> searchTasksTester(String taskname,Integer maintaskid, Integer taskid);
}