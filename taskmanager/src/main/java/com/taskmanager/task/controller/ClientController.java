package com.taskmanager.task.controller;

import com.taskmanager.task.dto.ClientProjectProgressDTO;
import com.taskmanager.task.dto.UsersWithProjectDTO;
import com.taskmanager.task.model.Client;
import com.taskmanager.task.model.Project;
import com.taskmanager.task.model.User;
import com.taskmanager.task.model.Users;
import com.taskmanager.task.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ClientController {
    @Autowired
    ClientService clientService;
    //CLIENT CONTROL
    @GetMapping("/client/all")
    public List<UsersWithProjectDTO> findAllClient(){
        return clientService.findAllClient();
    }

    @GetMapping("/client/search/{username}")
    public List<UsersWithProjectDTO> searchClient(@PathVariable String username){
        return clientService.searchClient(username);
    }

    @PostMapping("/client/add")
    Client addClient(@RequestBody Client client)
    {
        return clientService.addClient(client);
    }
    @DeleteMapping("/client/delete")
    int deleteClient(@RequestParam("clientId") int clientid)
    {
        return clientService.deleteById(clientid);
    }
    @GetMapping("/client/progress/{clientid}")
    public List<ClientProjectProgressDTO> searchClientProgress(@PathVariable int clientid){
        return clientService.searchProgress(clientid);
    }


}
