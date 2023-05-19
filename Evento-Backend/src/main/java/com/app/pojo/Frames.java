package com.app.pojo;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.app.pojo.AllEnums.FrameTypes;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Frames extends BaseEntity{
	@Enumerated(EnumType.STRING)
	private FrameTypes type;
	private String url;
	private String textData;
	@Embedded
	private Style style;
	@ManyToOne
	@JoinColumn(name = "page_id")
	private Pages page;
	private Long navigateTo;

	Frames(Frames f){
		type = f.getType();
		url = f.getUrl();
		textData = f.getTextData();
		// copy style check when class is implimentesd
		// TODO check for copy in future
		style = f.getStyle();
		page = getPage();
		navigateTo = getNavigateTo();
	}

}
