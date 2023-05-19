package com.app.pojo;

import javax.persistence.Column;
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
public class PollAnswers extends BaseEntity{
	@Column
	private Long attendeeId;
	@ManyToOne
	@JoinColumn(name = "option_id")
	private PollOptions option;
}
