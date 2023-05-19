package com.app.dto;

import java.time.LocalDateTime;

import com.app.pojo.Orders;
import com.app.pojo.Subscription;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

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
@JsonInclude(Include.NON_EMPTY)
public class OrdersDto {
	Long id;
	ClientDto client;
	Subscription subscription;
	LocalDateTime orderTime;
	String transactionId;
	
	public OrdersDto(Orders order){
		id = order.getId();
		client = new ClientDto(order.getClient());
		subscription = order.getSubscription();
		orderTime = order.getOrderTime();
		transactionId = order.getTransactionId();
	}
}
