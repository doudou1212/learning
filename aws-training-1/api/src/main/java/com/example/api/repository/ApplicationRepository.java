package com.example.api.repository;

import com.example.api.model.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<Vote, Integer> {
}
