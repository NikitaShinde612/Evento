package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Frames;

public interface FramesDao extends JpaRepository<Frames,Long> {
    
}
