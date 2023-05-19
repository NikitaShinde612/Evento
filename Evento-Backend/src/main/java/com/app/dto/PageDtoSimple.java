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
public class PageDtoSimple {
    private Long eventId;
    private String name;
    private Long id;

    public PageDtoSimple(Pages page) {
        name = page.getName();
        eventId = page.getEvent().getId();
        id = page.getId();
    }
}
