package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.EventDto;
import com.app.dto.HostEventDto;
import com.app.pojo.Event;
import com.app.services.EventServiceImpl;

@CrossOrigin
@RestController
@RequestMapping("/event")
public class EventController {

    @Autowired
    EventServiceImpl eventService;

    @GetMapping("/total_count")
    public Long GetAllEventCount() {

        return eventService.GetAllEventCount();
    }

    @PostMapping("/create/{userId}")
    public EventDto createEvent(@PathVariable Long userId, @RequestBody Event event) {

        return eventService.createEvent(userId, event);

    }

    @PostMapping("/edit/{userId}")
    public EventDto editEvent(@PathVariable Long userId, @RequestBody Event event) {

        return eventService.createEvent(userId, event);
    }

    @DeleteMapping("/delete/{eventId}")
    public String deleteEvent(@PathVariable Long eventId) {

        return eventService.deleteEvent(eventId);
    }


    @GetMapping("/get/{eventId}")
	public EventDto getEventById(@PathVariable Long eventId) {
		return eventService.getEventById(eventId);
	}

	@GetMapping("/all")
	public List<EventDto> getAllEvent() {
        return eventService.getAllEvent();
    
	}

    @GetMapping("/getbyclient/{clientId}")
    public List<EventDto> getAllEventsByClientId(@PathVariable Long clientId){
        return eventService.getAllEventsByClientId(clientId);
    }


    @GetMapping("/live/{eventId}")
    public HostEventDto getHostEventDetails(@PathVariable Long eventId){
        return eventService.getLiveEventDetails(eventId);
    }

}
