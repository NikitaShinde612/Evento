package com.app.services;

import java.util.List;

import com.app.dto.PageDto;
import com.app.dto.PageDtoSimple;
import com.app.pojo.Frames;
import com.app.pojo.Pages;

public interface PagesService {
    PageDto getPage(Long eventId ,Long pageId);
    PageDto createPage(Long eventId ,Pages page);
    PageDto updatePage(Long eventId ,Pages page);
    String deletePage(Long eventId ,Long pageId);
    PageDto copyPage(Long from,Pages to);
    PageDto updateFramesForSinglePage(Long frameId, List<Frames> frames);
    List<PageDtoSimple> getListOfPages(Long eventId);
}
