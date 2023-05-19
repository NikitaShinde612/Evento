package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.EventDao;
import com.app.dao.GallaryDao;
import com.app.dto.GallaryDto;
import com.app.pojo.Event;
import com.app.pojo.Gallary;

@Service
@Transactional
public class GallaryServiceImpl implements GallaryService{

    @Autowired
    GallaryDao gallaryDao;

    @Autowired
	EventDao eventDao;

    @Override
    public List<GallaryDto> getImagesForEvent(Long eventId) {
        return gallaryDao.findAllByEventId(eventId).stream().map(g->new GallaryDto(g)).collect(Collectors.toList());
    }

    @Override
    public List<GallaryDto> addImageFOrEvent(Long eventId,Gallary gallary) {
        
        Event check = eventDao.findById(eventId).orElse(null);
		if (check == null) {
			return null;
		}

        gallary.setEvent(check);

        gallaryDao.save(gallary);

        return gallaryDao.findAllByEventId(eventId).stream().map(g->new GallaryDto(g)).collect(Collectors.toList());


    }

}