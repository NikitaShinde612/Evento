package com.app.services;

import java.util.List;

import com.app.dto.EventDto;
import com.app.dto.HostEventDto;
import com.app.pojo.Event;

public interface EventService {
	Long GetAllEventCount();
	EventDto getEventById(Long eventId);
	List<EventDto> getAllEvent();
	EventDto createEvent(Long userId,Event event);
	EventDto editEvent(Long eventId,Event event);
	String deleteEvent(Long eventId);
	List<EventDto> getAllEventsByClientId(Long clientId);
	HostEventDto getLiveEventDetails(long eventId);

}
