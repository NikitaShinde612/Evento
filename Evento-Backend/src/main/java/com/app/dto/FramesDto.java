package com.app.dto;

import com.app.pojo.Frames;
import com.app.pojo.Style;
import com.app.pojo.AllEnums.FrameTypes;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class FramesDto {
    private Long id;
    private FrameTypes type;
    private String url;
    private String textData;
    private Style style;
    private Long navigateTo;

    public FramesDto(Frames frame) {
        id = frame.getId();
        type = frame.getType();
        url = frame.getUrl();
        textData = frame.getTextData();
        style = frame.getStyle();
        navigateTo = frame.getNavigateTo();
    }
}
