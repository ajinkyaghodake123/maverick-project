package com.stackroute.maverick.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import com.stackroute.maverick.domain.AuthenticationModel;
import com.stackroute.maverick.domain.LoggedUsers;
import com.stackroute.maverick.repositories.LoginRepo;

@Service
public class LoggedUserService {
	
	@Autowired
	LoginRepo loginrep;
	
	
	LoggedUsers logusr;
	
	@Bean
	public LoggedUsers loggedUsers() {
		return new LoggedUsers();
	}

	public void addLogedUser(LoggedUsers loggedUser) {
		
		 loginrep.save(loggedUser);
	}

	public void removeLoggedUser(LoggedUsers cred) {
		LoggedUsers user = loginrep.findByEmail(cred.getEmail());
		loginrep.deleteById(user.getId());
		
	}
	
	

}
