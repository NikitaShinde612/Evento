package com.app.services;

import java.util.List;

import com.app.dto.GallaryDto;
import com.app.pojo.Gallary;

public interface GallaryService {
  List<GallaryDto> getImagesForEvent(Long eventId);
  List<GallaryDto> addImageFOrEvent(Long eventId,Gallary gallary);
  
}
