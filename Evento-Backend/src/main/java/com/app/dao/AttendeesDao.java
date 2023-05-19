package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Attendees;

public interface AttendeesDao extends JpaRepository<Attendees,Long>{
    
}