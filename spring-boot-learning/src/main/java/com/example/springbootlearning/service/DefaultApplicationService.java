package com.example.springbootlearning.service;

import com.example.springbootlearning.model.User;
import com.example.springbootlearning.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class DefaultApplicationService implements ApplicationService{
    private UserRepository userRepository;

    @Override
    public String create(String name) {
        User user = new User(name);
        userRepository.save(user);
        return "OK";
    }

    @Override
    public User getUser(String name) {
        User user = userRepository.findByName(name);
        return user;
    }
}
