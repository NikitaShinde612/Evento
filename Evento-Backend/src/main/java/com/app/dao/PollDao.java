package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Polls;

public interface PollDao extends JpaRepository<Polls,Long>{
    List<Polls> findAllByEventId(Long eventId);
}
