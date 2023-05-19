package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.EventDao;
import com.app.dao.FramesDao;
import com.app.dao.PageDao;
import com.app.dto.PageDto;
import com.app.dto.PageDtoSimple;
import com.app.pojo.Event;
import com.app.pojo.Frames;
import com.app.pojo.Pages;

@Service
@Transactional
public class PagesServiceImpl implements PagesService {

    @Autowired
    PageDao pageDao;
    @Autowired
    EventDao eventDao;
    @Autowired
    FramesDao frameDao;
    
    

    @Override
    public PageDto getPage(Long eventId, Long pageId) {
        Pages page =  pageDao.findById(pageId).orElse(null);

        if (page == null) {
            return null;
        }

        if(page.getEvent()!= null){
            if(!page.getEvent().getPages().contains(page)){
                return null;
            }
        }
        else{
            return null;
        }

        
        
        return new PageDto(pageDao.save(page));
    }

    @Override
    public PageDto createPage(Long eventId, Pages page) {
        Event event = eventDao.findById(eventId).orElse(null);
        if (event == null) {
            return null;
        }
        page.setId(null);
        page.setEvent(event);
        return new PageDto(pageDao.save(page));
    }

    @Override
    public PageDto updatePage(Long eventId, Pages page) {
        Event event = eventDao.findById(eventId).orElse(null);
        if (event == null || page.getId() == null) {
            return null;
        }
        page.setEvent(event);
        return new PageDto(pageDao.save(page));
    }

    @Override
    public String deletePage(Long eventId, Long pageId) {
        Pages page = pageDao.findById(pageId).orElse(null);
        if (page == null) {
            return "error";
        }
        pageDao.delete(page);
        return "successful";
    }

    @Override
    public PageDto copyPage(Long from, Pages to) {
        Pages page = pageDao.findById(from).orElse(null);
        if (page == null) {
            return null;
        }
        Pages copiedPage = new Pages(page);
        copiedPage.setName(to.getName());
        copiedPage.setId(null);
        pageDao.save(copiedPage);
        return new PageDto(copiedPage);
    }

    @Override
    public PageDto updateFramesForSinglePage(Long pageId, List<Frames> frames) {
        Pages page = pageDao.findById(pageId).orElse(null);

        if(page == null){
            return null;
        }
        page.getFrames().forEach(fr->frameDao.delete(fr));;
        frames.forEach(f->f.setPage(page));
        frames.forEach(f->f.setId(null));
        page.setFrames(frames);
        return new PageDto(pageDao.save(page));
    }

    @Override
    public List<PageDtoSimple> getListOfPages(Long eventId) {
        return pageDao.findByEventId(eventId).stream().map(d->new PageDtoSimple(d)).collect(Collectors.toList());
    }

    

}
