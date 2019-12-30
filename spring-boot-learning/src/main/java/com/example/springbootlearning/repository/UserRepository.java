package com.example.springbootlearning.repository;

import com.example.springbootlearning.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findByName(String name);
}
