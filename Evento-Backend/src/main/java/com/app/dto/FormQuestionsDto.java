package com.app.dto;


import com.app.pojo.FormQuestions;

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
public class FormQuestionsDto {
    private Long id;
    private String question;
    

    FormQuestionsDto(FormQuestions que){
        id = que.getId();
        question = que.getQuestion();
    }

}