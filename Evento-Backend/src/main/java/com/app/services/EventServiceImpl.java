package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ClientDao;
import com.app.dao.EventDao;
import com.app.dto.EventDto;
import com.app.dto.HostEventDto;
import com.app.pojo.Client;
import com.app.pojo.Event;

@Service
@Transactional
public class EventServiceImpl implements EventService {

	@Autowired
	EventDao eventDao;
	@Autowired
	ClientDao clientDao;

	@Override
	public Long GetAllEventCount() {
		return eventDao.count();
	}

	@Override
	public EventDto createEvent(Long userId, Event event) {
		Client client = clientDao.findById(userId).orElse(null);
		if (client == null) {
			return null;
		}
		event.setClient(client);
		return new EventDto(eventDao.save(event));
	}

	@Override
	public EventDto editEvent(Long eventId, Event event) {
		Event check = eventDao.findById(eventId).orElse(null);
		if (check == null) {
			return null;
		}
		event.setId(eventId);
		eventDao.save(event);
		return new EventDto(event);
	}

	@Override
	public String deleteEvent(Long eventId) {
		Event check = eventDao.findById(eventId).orElse(null);

		if (check == null) {
			return "error";
		}
		eventDao.delete(check);
		return "deleted";
	}

	@Override
	public EventDto getEventById(Long eventId) {
		Event check = eventDao.findById(eventId).orElse(null);
		if (check == null) {
			return null;
		}
		return new EventDto(check);
	}

	@Override
	public List<EventDto> getAllEvent() {
		return eventDao.findAll().stream().map(e->new EventDto(e)).collect(Collectors.toList());
	}

	@Override
	public List<EventDto> getAllEventsByClientId(Long clientId) {
		return eventDao.findAllByClientId(clientId).stream().map(e-> new EventDto(e)).collect(Collectors.toList());
	}

	@Override
	public HostEventDto getLiveEventDetails(long eventId) {
		Event check = eventDao.findById(eventId).orElse(null);
		if (check == null) {
			return null;
		}
		return new HostEventDto(check);
	}

}
