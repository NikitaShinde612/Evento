package com.app.pojo;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

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
public class Pages extends BaseEntity implements Cloneable{
	@ManyToOne
	@JoinColumn(name = "event_id")
	private Event event;
	private String name;

	// check for orphan removal
	@OneToMany(mappedBy = "page",cascade = CascadeType.ALL)
	private List<Frames> frames;

	public Pages(Pages page){
		event = page.getEvent();
		name = page.getName();
		frames = page.getFrames().stream().map(f->new Frames(f)).collect(Collectors.toList());
	}
}
