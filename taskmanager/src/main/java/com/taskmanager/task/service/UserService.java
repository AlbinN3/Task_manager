package com.taskmanager.task.service;
import com.taskmanager.task.model.*;
import com.taskmanager.task.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;




    //USER SERVICE
    public List<Users> findAllUsers() {
        return userRepository.findAll();
    }

    public List<Users> searchUserByName(String name) {
        return userRepository.searchUserByName(name);
    }

    public Users loginWithUsernameAndPassword(String userName, String password) {
        return userRepository.validateUserNameAndPassword(userName,password);
    }

    public Users addUserDetails(Users users) {
        return userRepository.save(users);
    }
    public int deleteById(int userid) {return userRepository.deleteByUserId(userid);
    }


    public Users getUserById(Integer userId) {return userRepository.findByUserId(userId);
    }
//Common Dashboard
    public int countAllUsers() {
        return (int) userRepository.count();
    }
    public int countOfCompleteTasks(int userid){
        return userRepository.countOfCompleteTasks(userid);
    }
    public int countTotalTask(){
        return userRepository.countTotalTask();
    }
    public int countTotalProject(){
        return userRepository.countTotalProject();
    }
    public int countProjectCompleted(){
        return userRepository.countProjectCompleted();
    }
    public int countTaskInProgress() {
        return userRepository.countTaskInProgress();
    }

    public int countCompletedTask() {
        return userRepository.countCompletedTask();
    }
//Common Dashboard
    public List<Users> allUsersUnderManager() {
        return userRepository.allUserUnderManager();
    }

    public List<Users> searchUserUnderManager(String name) {
        return userRepository.searchUserUnderManager(name);
    }
    public List<Users> allUsersUnderTeamleader() {
        return userRepository.allUserUnderTeamleader();
    }

    public List<Users> searchUserUnderTeamleader(String name) {
        return userRepository.searchUserUnderTeamleader(name);
    }
}