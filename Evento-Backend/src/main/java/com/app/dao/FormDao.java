package com.app.dao;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Forms;

public interface FormDao extends JpaRepository <Forms, Long>{
    List<Forms> findAllByEventId(Long eventId);
}
