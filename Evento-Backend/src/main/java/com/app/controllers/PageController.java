package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.PageDto;
import com.app.dto.PageDtoSimple;
import com.app.pojo.Pages;
import com.app.services.PagesService;
import com.app.pojo.Frames;



@CrossOrigin
@RestController
@RequestMapping("/page")
public class PageController{
	
	@Autowired
	PagesService pagesService;

    @GetMapping("/get/{eventId}/{pageId}")
    public PageDto getPage( @PathVariable Long eventId,@PathVariable Long pageId) {

        return pagesService.getPage(eventId, pageId);
    }

    @PostMapping("/create/{eventId}")
    public PageDto createPage(@PathVariable Long eventId, @RequestBody Pages page) {
        
        return pagesService.createPage(eventId, page);
    }

    @PutMapping("/update/{eventId}")
    public PageDto updatePage(@PathVariable Long eventId, @RequestBody Pages page) {
        
        return pagesService.updatePage(eventId, page);
    }

    @DeleteMapping("/delete/{eventId}/{pageId}")
    public String deletePage(@PathVariable Long eventId, @PathVariable Long pageId) {
        
        return pagesService.deletePage(eventId, pageId);
    }

    @PostMapping("/copy/{from}")
    public PageDto copyPage(@PathVariable Long from,@RequestBody Pages to) {
        
        return pagesService.copyPage(from, to);
    }


    @PostMapping("/addframes/{pageId}")
    public PageDto updateFramesForSinglePage(@PathVariable long pageId, @RequestBody List<Frames> frames) {
        return pagesService.updateFramesForSinglePage(pageId, frames);
    }

    @GetMapping("/getall/{eventId}")
    public List<PageDtoSimple> getListOfPages(@PathVariable Long eventId) {
        return pagesService.getListOfPages(eventId);
    }
     
}