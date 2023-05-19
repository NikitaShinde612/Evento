package com.app.dto;

import java.util.List;
import java.util.stream.Collectors;

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
public class FormQuestionForReportDto {
    private Long questionId;
    private String question;
    private List<FormAnswerDto> answers;

    FormQuestionForReportDto(FormQuestions que){
        questionId = que.getId();
        question = que.getQuestion();
        if(que.getAnswers() != null)
        answers = que.getAnswers().stream().map(q-> new FormAnswerDto(q)).collect(Collectors.toList());
    }

}
