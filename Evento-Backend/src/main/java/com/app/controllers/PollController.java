package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.PollDto;
import com.app.dto.PollForReportDto;
import com.app.pojo.Polls;
import com.app.services.PollService;

@CrossOrigin
@RestController
@RequestMapping("/poll")
public class PollController{

	@Autowired
	PollService pollService;
    
	@GetMapping("/all/{eventId}")
    public List<PollDto> getAllPollsForEvent(@PathVariable Long eventId) {
        
        return pollService.getAllPollsForEvent(eventId);
    }

    @PostMapping("/create/{eventId}")
    public PollDto createPolls(@PathVariable Long eventId, @RequestBody Polls poll) {
       
        return pollService.createPolls(eventId, poll);
    }

    @PutMapping("/edit/{eventId}")
    public PollDto editPolls(@PathVariable Long eventId, @RequestBody Polls poll) {
        
        return pollService.editPolls(eventId, poll);
    }

    @DeleteMapping("/delete/{eventId}/{pollId}")
    public String deletePoll(@PathVariable Long eventId, @PathVariable Long pollId) {
        
        return pollService.deletePoll(eventId, pollId);
    }

    @PostMapping("/submit/{attendeeId}")
    public String submitPoll(@PathVariable long attendeeId,@RequestBody Polls poll) {
        
        return pollService.submitPoll(attendeeId, poll);
    }

    @GetMapping("/request/{pollId}")
    public PollDto requestPoll(@PathVariable long pollId) {
        
        return pollService.requestPoll(pollId);
    }

    @GetMapping("/report/{pollId}")
    public PollForReportDto getReport(@PathVariable long pollId) {
       
        return pollService.getReport(pollId);
    }
    
}