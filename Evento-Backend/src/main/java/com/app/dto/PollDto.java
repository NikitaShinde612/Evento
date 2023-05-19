package com.app.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.app.pojo.Polls;

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
public class PollDto {
    private String name;
    private List<PollOptionDto> options;
    private Long eventId;
    private Long id;

    public PollDto(Polls poll) {
        name = poll.getName();
        if (poll.getOptions() != null) {
            options = poll.getOptions().stream().map(p -> new PollOptionDto(p)).collect(Collectors.toList());
        }
        eventId = poll.getEvent().getId();
        id = poll.getId();
    }
}
