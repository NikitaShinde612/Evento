package com.app.pojo;

import javax.persistence.Embeddable;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Style {
    
    // For Positioning of Frame
    private String position;
    private String top;
    private String bottom;
    @JsonProperty("left")
    private String leftPosition;
    @JsonProperty("right")
    private String rightPoition;

    // for sizing of Frame
    private String height;
    private String width;
    private String border;
    private String color;   // hex
    private String margin;
    private String pading;

    // for Font
    private String fontFamily;
    private String fontWeight;
    private String fontSize;
    private String fontStyle;
    private String fontVarient;
    private String letterSpacing;
    private String lineHeight;

    //image
    private String objectFit;


    private String background;
    private String opacity;  

}
