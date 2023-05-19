package com.app.dto;

import com.app.pojo.Gallary;

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
public class GallaryDto {
    private Long id;
	private String image;
	private String deleteId;

    public GallaryDto(Gallary gallary){
        id = gallary.getId();
        image = gallary.getImage();
        deleteId = gallary.getDeleteId();
    }

}
