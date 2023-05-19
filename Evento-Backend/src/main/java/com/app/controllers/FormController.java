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

import com.app.dto.FormDto;
import com.app.dto.FormForReportDto;
import com.app.pojo.Forms;
import com.app.services.FormService;

@CrossOrigin
@RestController
@RequestMapping("/form")
public class FormController {
	@Autowired
	FormService formService;

    
   
	@GetMapping("/all/{eventId}")
    public List<FormDto> getAllFormsForEvent(@PathVariable Long eventId) {
       
        return formService.getAllFormsForEvent(eventId);
    }
   
   
    @PostMapping("/create/{eventId}")
    public FormDto createForm(@PathVariable Long eventId,@RequestBody Forms form) {
    	return formService.createForm(eventId, form);
    }

       
    @PutMapping("/edit/{eventId}")
    public FormDto editForm(@PathVariable Long eventId,@RequestBody Forms form) {
        
        return formService.editForm(eventId, form);
    }

    

    @DeleteMapping("/delete/{eventId}/{formId}")
    public String deleteForm(@PathVariable Long eventId,@PathVariable Long formId) {
        return formService.deleteForm(eventId, formId);
    }

    
    
    @PostMapping("/question/add/{formId}")
    public FormDto addQuestion(@PathVariable Long formId,@RequestBody Forms form) {
        return formService.addQuestion(formId, form);
    }

    
    @PutMapping("/question/edit/{formId}")
    public FormDto editQuestion(@PathVariable Long formId,@RequestBody Forms form) {
        return formService.editQuestion(formId, form);
    }

   

    @DeleteMapping("/question/delete/{formId}")
    public FormDto deleteQuestion(@PathVariable Long formId,@RequestBody Forms form) {
       return formService.deleteQuestion(formId, form);
    }

    
    @PostMapping("/submit/{attendeeId}")
    public String submitForm(@PathVariable long attendeeId,@RequestBody Forms form) {
        return formService.submitForm(attendeeId, form);
    }

    
    @GetMapping("/request/{formId}")
    public FormDto requestForm(@PathVariable long formId) {
        return formService.requestForm(formId);
    }

    
    @GetMapping("/report/{formID}")
    public FormForReportDto getReport(@PathVariable long fromId) {
        return formService.getReport(fromId);
    }
    
}