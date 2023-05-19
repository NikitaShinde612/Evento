package com.app.services;

import java.util.List;

import com.app.dto.FormDto;
import com.app.dto.FormForReportDto;
import com.app.pojo.Forms;

public interface FormService {

    List<FormDto> getAllFormsForEvent(Long eventId);

    FormDto createForm(Long eventId, Forms form);

    FormDto editForm(Long eventId, Forms form);

    String deleteForm(Long eventId, Long formId);

    FormDto addQuestion(Long formId, Forms form);

    FormDto editQuestion(Long formId, Forms form);

    FormDto deleteQuestion(Long formId, Forms form);

    String submitForm(long attendeeId, Forms form);

    FormDto requestForm(long formId);

    FormForReportDto getReport(long fromId);

}
