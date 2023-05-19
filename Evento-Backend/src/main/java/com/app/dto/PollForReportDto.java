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
public class PollForReportDto {
    
    private String name;
    private List<PollOptionForReport> options;
    private Long eventId;

    public PollForReportDto(Polls poll){
        name = poll.getName();
        if (poll.getOptions() != null) {
        options = poll.getOptions().stream().map(p->new PollOptionForReport(p)).collect(Collectors.toList());
        }
        eventId = poll.getEvent().getId();
    }
}
