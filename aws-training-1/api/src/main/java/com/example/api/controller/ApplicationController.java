package com.example.api.controller;

import com.example.api.model.Vote;
import com.example.api.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/votes")
public class ApplicationController {

    private final ApplicationService applicationService;

    @CrossOrigin
    @PostMapping("add")
    public ResponseEntity<String> addVote() {
        applicationService.addVote();

        return ResponseEntity.status(HttpStatus.OK)
            .body("success");
    }

    @CrossOrigin
    @GetMapping("{voteId}")
    public ResponseEntity<Vote> getVoteById(
            @PathVariable Integer voteId
    ) {
        var vote = applicationService.findVoteById(voteId);

        return ResponseEntity.status(HttpStatus.OK)
                .body(vote);
    }
}
