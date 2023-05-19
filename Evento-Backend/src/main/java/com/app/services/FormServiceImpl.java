package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AttendeesDao;
import com.app.dao.EventDao;
import com.app.dao.FormDao;
import com.app.dto.FormDto;
import com.app.dto.FormForReportDto;
import com.app.pojo.Attendees;
import com.app.pojo.Event;
import com.app.pojo.FormAnswers;
import com.app.pojo.Forms;

@Service
@Transactional
public class FormServiceImpl implements FormService {

    @Autowired
    FormDao formdao;

    @Autowired
    EventDao eventDao;

    @Autowired
    AttendeesDao attendeesDao;

    @Override
    public List<FormDto> getAllFormsForEvent(Long eventId) {
        return formdao.findAllByEventId(eventId).stream().map(f -> new FormDto(f)).collect(Collectors.toList());
    }

    @Override
    public FormDto createForm(Long eventId, Forms form) {
        Event event = eventDao.findById(eventId).orElse(null);
        if (event == null) {
            return null;
        }
        form.setId(null);
        form.setEvent(event);
        formdao.save(form);
        return new FormDto(form);
    }

    @Override
    public FormDto editForm(Long eventId, Forms form) {
        Event event = eventDao.findById(eventId).orElse(null);
        if (event == null || form.getId() == null) {
            return null;
        }

        form.setEvent(event);
        formdao.save(form);
        return new FormDto(form);
    }

    @Override
    public String deleteForm(Long eventId, Long formId) {

        // TODO event id for checking of form ID in that event while deleting

        Forms form = formdao.findById(formId).orElse(null);
        if (form == null) {
            return "error";
        }
        formdao.delete(form);
        return "deleted";
    }

    @Override
    public FormDto addQuestion(Long formId, Forms form) {
        Forms setupForm = formdao.findById(formId).orElse(null);
        if (setupForm == null) {
            return null;
        }
        setupForm.setQuestions(form.getQuestions());
        return new FormDto(setupForm);
    }

    @Override
    public FormDto editQuestion(Long formId, Forms form) {
        Forms setupForm = formdao.findById(formId).orElse(null);
        if (setupForm == null) {
            return null;
        }
        setupForm.setQuestions(form.getQuestions());
        return new FormDto(setupForm);
    }

    @Override
    public FormDto deleteQuestion(Long formId, Forms form) {
        Forms setupForm = formdao.findById(formId).orElse(null);
        if (setupForm == null) {
            return null;
        }
        setupForm.setQuestions(form.getQuestions());
        return new FormDto(setupForm);
    }

    @Override
    public String submitForm(long attendeeId, Forms form) {
        Forms setupForm = formdao.findById(form.getId()).orElse(null);
        Attendees attendee = attendeesDao.findById(attendeeId).orElse(null);

        if (setupForm == null || attendee == null) {
            return "error";
        }
        //System.out.println("data from form");
        //System.out.println(form);
        setupForm.getQuestions().forEach(q -> {
            form.getQuestions().forEach(fq -> {
            	System.out.println(fq.getId()+" : "+ q.getId() );
                if (fq.getId() == q.getId()) {
                    List<FormAnswers> answers = q.getAnswers();
                    fq.getAnswers().forEach(a -> {a.setAttendeeId(attendeeId); a.setQuestion(q);});
                    answers.addAll(fq.getAnswers());
                   // System.out.println(fq.getAnswers());
                }
            });
        });

        return "successful";
    }

    @Override
    public FormDto requestForm(long formId) {
        Forms returnForm = formdao.findById(formId).orElse(null);
        if(returnForm == null){
            return null;
        }
        return new FormDto(returnForm);
    }

    @Override
    public FormForReportDto getReport(long formId) {
        Forms returnForm = formdao.findById(formId).orElse(null);
        if(returnForm == null){
            return null;
        }
        return new FormForReportDto(returnForm);
    }

}