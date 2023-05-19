package com.app.controllers;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.ClientDto;
import com.app.dto.FeedbackDto;
import com.app.dto.authenticateDto;
import com.app.pojo.Client;
import com.app.pojo.Feedback;
import com.app.services.ClientService;

@CrossOrigin
@RestController
@RequestMapping("/client")
public class ClientController {

	@Autowired
	ClientService clientService;

	@GetMapping("/all")
	public List<ClientDto> getAllClients() {
		return clientService.getAllClients();
	}

	@PostMapping("/add")
	public ApiResponse addClient(@RequestBody Client client) {
		if (clientService.addClient(client) == null) {
			return new ApiResponse("Error adding client");
		}
		return new ApiResponse("Client Added");
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getClientFromId(@PathVariable Long id) {

		return new ResponseEntity<>(clientService.getClient(id), HttpStatus.OK);
	}

	@PostMapping("/authanticate")
	public ClientDto Authanticate(@RequestBody authenticateDto auth) {

		return clientService.authanticate(auth.getEmail(), auth.getPassword());

	}

	@PutMapping("/update/{id}")
	public ClientDto UpdateClient(@RequestBody Client client, @PathVariable Long id) {
		return clientService.updateClient(id, client);
	}

	@DeleteMapping("/delete/{id}")
	public String DeleteClient(@PathVariable Long id) {
		return clientService.deleteClient(id);
	}

	@GetMapping("/feedback/{userId}")
	public FeedbackDto getFeedback(@PathVariable Long userId) {
		return clientService.getFeedback(userId);
	}

	@PutMapping("/feedback/add/{userId}")
	public String addFeedback(@PathVariable Long userId, @RequestBody Feedback feedback) {
		feedback.setDate(LocalDateTime.now());
		return clientService.addFeedback(userId, feedback);
	}

}
