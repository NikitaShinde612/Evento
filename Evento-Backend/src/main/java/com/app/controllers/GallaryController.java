package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.GallaryDto;
import com.app.pojo.Gallary;
import com.app.services.GallaryServiceImpl;

@CrossOrigin
@RestController
@RequestMapping("/gallary")
public class GallaryController {
    @Autowired
    GallaryServiceImpl gservice;

    @GetMapping("/all/{eventId}")
    public List<GallaryDto> getImagesForEvent(@PathVariable Long eventId) {
        return gservice.getImagesForEvent(eventId);
    }

    @PostMapping("/add/{eventId}")
    public List<GallaryDto> addImageFOrEvent(@PathVariable Long eventId,@RequestBody Gallary gallary) {
        return gservice.addImageFOrEvent(eventId, gallary);
    }
    
}
