package com.app.dto;

import com.app.pojo.FormAnswers;

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

public class FormAnswerDto {
    Long id;
    private String answer;
    private Long attendeeId;


    FormAnswerDto(FormAnswers ans){
        id = ans.getId();
        answer = ans.getAnswer();
        attendeeId = ans.getAttendeeId();
    }
}
