package com.app.dto;

import com.app.pojo.PollAnswers;

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
public class PollAnswerDto {
    private Long id;
    private Long attendeeId;
    private Long optionId;

    PollAnswerDto(PollAnswers ans){
        id = ans.getId();
        attendeeId = ans.getAttendeeId();
        optionId = ans.getOption().getId();
    }
}
