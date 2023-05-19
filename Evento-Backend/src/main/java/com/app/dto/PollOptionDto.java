package com.app.dto;

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
public class PollOptionDto {
    private long id;
    private String content;
    // private long pollId;
    // private List<PollAnswers> answers;

    PollOptionDto(PollOptions option) {
        if(option.getId() != null)
        id = option.getId();
        content = option.getContent();
        // pollId = option.getPoll().getId();
    }
}
