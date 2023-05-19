package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Event;

public interface EventDao extends JpaRepository<Event, Long> {
    List<Event> findAllByClientId(Long clientId);
}
