package com.example.springbootlearning.api;

import com.example.springbootlearning.model.User;
import com.example.springbootlearning.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class ApplicationController {
    @Autowired
    private ApplicationService applicationService;

    @PostMapping("/{user_name}")
    public ResponseEntity<String> createUser(@PathVariable("user_name") String name) {
        System.out.println("create user!");
        return ResponseEntity.ok(applicationService.create(name));
    }

    @GetMapping("/{user_name}")
    public ResponseEntity<User> getOneUserInfo(@PathVariable("user_name") String name) {
        return ResponseEntity.ok(applicationService.getUser(name));
    }
}
