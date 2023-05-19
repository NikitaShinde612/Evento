package com.app.pojo;


import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

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
public class Gallary extends BaseEntity{

	@ManyToOne()
	@JoinColumn(name = "event_id",nullable=false)
	private Event event;
	private String image;
	private String deleteId;
}
