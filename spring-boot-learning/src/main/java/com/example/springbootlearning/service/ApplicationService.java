package com.example.springbootlearning.service;

import com.example.springbootlearning.model.User;

public interface ApplicationService {
    String create(String name);

    User getUser(String name);
}
