package com.app.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.app.pojo.Pages;

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
public class PageDto {
    private Long eventId;
    private String name;
    private List<FramesDto> frames;
    private Long id;

    public PageDto(Pages page) {
        name = page.getName();
        eventId = page.getEvent().getId();
        if (page.getFrames() != null) {
            frames = page.getFrames().stream().map(f -> new FramesDto(f)).collect(Collectors.toList());
        }
        id = page.getId();
    }
}
