package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Gallary;

public interface GallaryDao extends JpaRepository<Gallary,Long> {
    List<Gallary> findAllByEventId(Long eventId);
}
