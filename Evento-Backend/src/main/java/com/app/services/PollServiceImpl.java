package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.PollDto;
import com.app.dto.PollForReportDto;
import com.app.pojo.Polls;

import com.app.dao.AttendeesDao;
import com.app.dao.EventDao;
import com.app.dao.PollDao;
import com.app.pojo.Attendees;
import com.app.pojo.Event;
import com.app.pojo.PollAnswers;

@Service
@Transactional
public class PollServiceImpl implements PollService {

    @Autowired
    EventDao eventDao;

    @Autowired
    AttendeesDao attendeesDao;

    @Autowired
    PollDao pollDao;

    @Override
    public List<PollDto> getAllPollsForEvent(Long eventId) {

        return pollDao.findAllByEventId(eventId).stream().map(p -> new PollDto(p)).collect(Collectors.toList());
    }

    @Override
    public PollDto createPolls(Long eventId, Polls poll) {
        Event event = eventDao.findById(eventId).orElse(null);
        if (event == null) {
            return null;
        }
        poll.setId(null);
        poll.setEvent(event);
        
        return new PollDto(pollDao.save(poll));

    }

    @Override
    public PollDto editPolls(Long eventId, Polls poll) {
        Event event = eventDao.findById(eventId).orElse(null);
        if (event == null || poll.getId() == null) {
            return null;
        }
        
        poll.setEvent(event);
        pollDao.save(poll);
        return new PollDto(poll);

    }

    @Override
    public String deletePoll(Long eventId, Long pollId) {
        Polls poll = pollDao.findById(pollId).orElse(null);
        if (poll == null) {
            return "error";
        }
        pollDao.delete(poll);
        return "deleted";
    }

    @Override
    public String submitPoll(long attendeeId, Polls poll) {
        Polls setupPoll = pollDao.findById(poll.getId()).orElse(null);
        Attendees attendee = attendeesDao.findById(attendeeId).orElse(null);

        if (setupPoll == null || attendee == null) {
            return "error";
        }

        setupPoll.getOptions().forEach(o -> {
            poll.getOptions().forEach(fo -> {
                if (fo.getId() == o.getId()) {
                    List<PollAnswers> answers = o.getAnswers();
                    fo.getAnswers().forEach(a -> a.setAttendeeId(attendeeId));
                    answers.addAll(fo.getAnswers());
                }
            });
        });

        return "successful";
    }

    @Override
    public PollDto requestPoll(long pollId) {
        Polls returnpoll = pollDao.findById(pollId).orElse(null);
        if (returnpoll == null) {
            return null;
        }
        return new PollDto(returnpoll);
    }

    @Override
    public PollForReportDto getReport(long pollId) {
        Polls returnpoll = pollDao.findById(pollId).orElse(null);
        if (returnpoll == null) {
            return null;
        }
        return new PollForReportDto(returnpoll);
    }

}