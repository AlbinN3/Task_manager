package com.taskmanager.task.service;

import com.taskmanager.task.dto.ClientProjectProgressDTO;
import com.taskmanager.task.dto.UsersWithProjectDTO;
import com.taskmanager.task.model.Client;
import com.taskmanager.task.model.User;
import com.taskmanager.task.model.Users;
import com.taskmanager.task.repository.ClientRepository;
import com.taskmanager.task.repository.UserRepository;
import com.taskmanager.task.repository.ViewClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
@Service
public class ClientService {
    @Autowired
    ClientRepository clientRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    ViewClientRepository viewClientRepository;
    //CLIENT SERVICE
    public List<UsersWithProjectDTO> findAllClient() {
        List<Object[]> results = userRepository.findAllClient();
        List<UsersWithProjectDTO> dtos = new ArrayList<>();
        for (Object[] result : results) {
            UsersWithProjectDTO dto = new UsersWithProjectDTO();
            dto.setUserid((Integer) result[0]);
            dto.setUsername((String) result[1]);
            dto.setProjectid((Integer) result[5]);
            dto.setProjectname((String) result[6]);
            dto.setDuedate((Date) result[8]);
            dtos.add(dto);
        }
        return dtos;
    }

    /*public List<Users> searchClient(String clientname) {
        List<Users> userList=new ArrayList<>() {
        };
        List<Object[]> resultSet=userRepository.searchClient(clientname);
        for (Object[] rs : resultSet) {
            int id = (int) rs[0];
            Users obj=new Users();
            obj.setClientid(id);
            userList.add(obj);
        }
         return userList;
    }*/

    public Client addClient(Client client) {return clientRepository.save(client);
    }

    public int deleteById(int clientid) {return clientRepository.deleteByClientId(clientid);
    }

    public List<UsersWithProjectDTO> searchClient(String clientname) {
        List<Object[]> results = userRepository.searchClient(clientname);
        List<UsersWithProjectDTO> dtos = new ArrayList<>();
        for (Object[] result : results) {
            UsersWithProjectDTO dto = new UsersWithProjectDTO();
            dto.setUserid((Integer) result[0]);
            dto.setUsername((String) result[1]);
            dto.setProjectid((Integer) result[5]);
            dto.setProjectname((String) result[6]);
            dto.setDuedate((Date) result[8]);
            dtos.add(dto);
        }
        return dtos;
    }

    public List<ClientProjectProgressDTO> searchProgress(int clientid) {
        List<Object[]> results = userRepository.searchProgress(clientid);
        List<ClientProjectProgressDTO> dtos = new ArrayList<>();
        for (Object[] result : results) {
            ClientProjectProgressDTO dto = new ClientProjectProgressDTO();
            dto.setProgress((BigDecimal) result[0]);
            System.out.println(result[0]);
            dto.setProjectid((Integer) result[1]);
            dto.setUserid((Integer) result[2]);
            dto.setUsername((String) result[3]);
            dto.setProjectname((String) result[4]);
            dtos.add(dto);
        }
        return dtos;
    }

    public List<Users> findAllClientDetails() { return viewClientRepository.findAllClientDetails();}
}
