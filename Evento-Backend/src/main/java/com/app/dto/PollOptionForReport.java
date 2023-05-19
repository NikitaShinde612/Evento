package com.app.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.app.pojo.PollOptions;

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
public class PollOptionForReport {
    private long optionId;
    private String content;
    private List<PollAnswerDto> answers;

    PollOptionForReport(PollOptions option) {
        optionId = option.getId();
        content = option.getContent();
        if (option.getAnswers() != null) {
            answers = option.getAnswers().stream().map(o -> new PollAnswerDto(o)).collect(Collectors.toList());
        }
    }
}
