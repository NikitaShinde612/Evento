package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.dao.ClientDao;
import com.app.dao.EventDao;
import com.app.dao.OrdersDao;
import com.app.dto.ClientDto;
import com.app.dto.FeedbackDto;
import com.app.pojo.Client;
import com.app.pojo.Feedback;


@Service
@Transactional
public class ClientServiceImpl implements ClientService {

	@Autowired
	ClientDao clientDao;
	@Autowired
	OrdersDao ordersDao;
	@Autowired
	EventDao eventDao;

	@Autowired
	SubscriptionServiceImpl subsServer;

	@Override
	public List<ClientDto> getAllClients() {
		return clientDao.findAll().stream().map(c->new ClientDto(c)).collect(Collectors.toList());
	}

	@Override
	public ClientDto addClient(Client client) {
		client.setId(null);
		return new ClientDto(clientDao.save(client));
	}

	@Override
	public ClientDto getClient(Long id) {
		Client client = clientDao.findById(id).orElse(null);
		if(client == null){
			return null;
		}
		return new ClientDto(client);
	}

	@Override
	public ClientDto authanticate(String email, String password) {

		Client client = clientDao.findByEmailAndPassword(email, password).orElse(null);

		if(client == null){
			return null;
		}
		return new ClientDto(client);
	}

	@Override
	public ClientDto updateClient(Long id, Client client) {
		client.setId(id);
		return new ClientDto(clientDao.save(client));
	}

	@Override
	public String deleteClient(Long id) {
		Client client = clientDao.findById(id).orElse(null);
		if (client == null) {
			return "error";
		}
		clientDao.deleteById(id);
		return "deleted";
	}

	@Override
	public FeedbackDto getFeedback(Long userId) {
		Client client = clientDao.findById(userId).orElse(null);
		if (client == null) {
			return new FeedbackDto();
		}
		return new FeedbackDto(client.getFeedback());
	}

	@Override
	public String addFeedback(Long userId, Feedback fback) {
		Client client = clientDao.findById(userId).orElse(null);
		if (client == null) {
			return "error";
		}
		fback.setClient(client);
		client.setFeedback(fback);
		return "sucessful";
	}

	

	
	

}
