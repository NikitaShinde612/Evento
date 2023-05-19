package com.app.dto;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import com.app.pojo.Event;

import com.app.pojo.AllEnums.LoginType;
import com.fasterxml.jackson.annotation.JsonInclude;


import com.app.pojo.*;

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
@JsonInclude(JsonInclude.Include.ALWAYS)
public class HostEventDto {
	private Long id;
	private String name;
	private LocalDateTime start;
	private LocalDateTime end;
	private LoginType typeOfLogin;
	private List<GallaryDto> gallary;
	private String homePage;
	private List<PageDto> pages;
	private List<FormDto> forms;
	private List<PollDto> polls;




	public HostEventDto(Event event) {
		if(event != null) {
			id = event.getId();
			name = event.getName();
			start = event.getStart();
			end = event.getEnd();
			homePage = event.getHomePage();
			typeOfLogin = event.getTypeOfLogin();
			homePage = event.getHomePage();
			
			homePage = event.getHomePage();
			if(event.getPages() != null){
				pages = event.getPages().stream().map(p->new PageDto(p)).collect(Collectors.toList());
			}
			if(event.getForms() != null){
				forms = event.getForms().stream().map(f->new FormDto(f)).collect(Collectors.toList());
			}
			if(event.getPolls() != null){
				polls = event.getPolls().stream().map(p->new PollDto(p)).collect(Collectors.toList());
			}
			if(event.getGallary() != null){
				gallary = event.getGallary().stream().map(g->new GallaryDto(g)).collect(Collectors.toList());
			}
		}
	}
}