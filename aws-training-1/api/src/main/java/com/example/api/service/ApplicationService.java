package com.example.api.service;


import com.example.api.model.Vote;

public interface ApplicationService {
    void addVote();
    Vote findVoteById(Integer voteId);
}
