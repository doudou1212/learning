package com.example.api.service;

import com.example.api.model.Vote;
import com.example.api.repository.ApplicationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
class ApplicationServiceImpl implements ApplicationService {

    private final ApplicationRepository applicationRepository;

    @Override
    public void addVote() {
        var vote = applicationRepository.findById(1);
        if(vote.isPresent()) {
            var id = vote.get().getId();
            var voteNumber = vote.get().getVote();
            applicationRepository.save(new Vote(id, voteNumber+1));
        } else {
            Vote newVote = new Vote(1,1);
            applicationRepository.save(newVote);
        }
    }

    @Override
    public Vote findVoteById(Integer voteId) {
        var voteOptional = applicationRepository.findById(voteId);
        if (voteOptional.isEmpty()) {
            return new Vote(1, 0);
        } else {
            return voteOptional.get();
        }
    }
}
