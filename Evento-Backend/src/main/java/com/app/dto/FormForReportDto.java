
package com.app.dto;


import java.util.List;
import java.util.stream.Collectors;

import com.app.pojo.Forms;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class FormForReportDto {
    private Long formId;
    private String name;
	private String description;
    private List<FormQuestionForReportDto> questions;
    private Long eventId;


    public FormForReportDto(Forms form){
        formId = form.getId();
        name = form.getName();
        description = form.getDescription();
        if(form.getQuestions() != null)
        questions = form.getQuestions().stream().map(q-> new FormQuestionForReportDto(q)).collect(Collectors.toList());
        eventId = form.getEvent().getId();
    }
}
