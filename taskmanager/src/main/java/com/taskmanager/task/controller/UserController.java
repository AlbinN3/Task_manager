package com.taskmanager.task.controller;
import com.taskmanager.task.model.*;
import com.taskmanager.task.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@CrossOrigin
public class UserController {
    @Autowired
    UserService userService;
    //USER CONTROLS
    @GetMapping("/users/all")
    public List<Users> findAllUsers(){
        return userService.findAllUsers();
    }
    @GetMapping("users/under/manager")
    public List<Users> allUsersUnderManager(){return userService.allUsersUnderManager();}
    @GetMapping("users/under/manager/search")
    public List<Users> searchUsersUnderManager(@RequestParam("name") String name){return userService.searchUserUnderManager(name);}
    @GetMapping("users/under/teamleader")
    public List<Users> allUsersUnderTeamleader(){return userService.allUsersUnderTeamleader();}
    @GetMapping("users/under/teamleader/search")
    public List<Users> searchUsersUnderTeamleader(@RequestParam("name") String name){return userService.searchUserUnderTeamleader(name);}
    @GetMapping("/users/search")
    public List<Users> searchProducts(@RequestParam("name") String name){
        return userService.searchUserByName(name);
    }
    @GetMapping("/users/getuser")
    public Users getProjectById(@RequestParam("userid") Integer userId) {
        return userService.getUserById(userId);
    }

    @GetMapping("users/login")
    public Users login(@RequestParam("userName") String userName, @RequestParam("password") String password){
        return userService.loginWithUsernameAndPassword(userName,password);
    }

    @PostMapping("/users/add")
    Users addUser(@RequestBody Users users)
    {
        return userService.addUserDetails(users);
    }


    @DeleteMapping("/users/delete/{userid}")
    int deleteUsers(@PathVariable int userid) {
        return userService.deleteById(userid);
    }




    @GetMapping("users/count")
    int countUsers(){return userService.countAllUsers();}

    //Completed task number
    @GetMapping("users/count/completetask")
    int countCompleteTasks(@RequestParam("userid") int userid){return userService.countOfCompleteTasks(userid);}
    @GetMapping("users/count/taskinprogress")
    int countTaskInProgress(){return userService.countTaskInProgress();}
    @GetMapping("users/admin/count/completedtask")
    int countCompletedTask(){return userService.countCompletedTask();}
    @GetMapping("users/admin/count/totaltask")
    int countTotalTask(){return userService.countTotalTask();}
    @GetMapping("users/admin/count/totalproject")
    int countTotalProject(){return userService.countTotalProject();}
    @GetMapping("users/admin/count/projectcompleted")
    int countProjectCompleted(){return userService.countProjectCompleted();}
}