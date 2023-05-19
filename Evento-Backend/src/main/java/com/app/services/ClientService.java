package com.app.services;

import java.util.List;

import com.app.dto.ClientDto;
import com.app.dto.FeedbackDto;
import com.app.pojo.Client;
import com.app.pojo.Feedback;

public interface ClientService {
	//for client 
	List<ClientDto> getAllClients();
	ClientDto getClient(Long id);
	ClientDto addClient(Client client);
	ClientDto authanticate(String username,String password);
	ClientDto updateClient(Long id,Client client);
	String deleteClient(Long id);
	
	
	// For Feedback 
	FeedbackDto getFeedback(Long userId);
	String addFeedback(Long userId, Feedback fback);
	
	
}
