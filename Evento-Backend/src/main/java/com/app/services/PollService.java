package com.app.services;

import java.util.List;

import com.app.dto.PollDto;
import com.app.dto.PollForReportDto;
import com.app.pojo.Polls;

public interface PollService {
    List<PollDto> getAllPollsForEvent(Long eventId);

    PollDto createPolls(Long eventId, Polls poll);

    PollDto editPolls(Long eventId, Polls poll);

    String deletePoll(Long eventId, Long pollId);

    String submitPoll(long attendeeId, Polls poll);

    PollDto requestPoll(long pollId);

    PollForReportDto getReport(long pollId);

}
