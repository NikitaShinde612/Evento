package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Pages;

public interface PageDao extends JpaRepository<Pages, Long> {
    List<Pages> findByEventId(Long eventId);
}
