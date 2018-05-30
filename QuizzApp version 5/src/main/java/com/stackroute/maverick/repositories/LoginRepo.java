package com.stackroute.maverick.repositories;

import org.springframework.data.repository.CrudRepository;

import com.stackroute.maverick.domain.LoggedUsers;

import java.lang.String;
import java.util.List;

public interface LoginRepo extends CrudRepository<LoggedUsers, Integer> {
	LoggedUsers findByEmail(String email);
	
	 void deleteById(Integer id);
	// void delete(LoggedUsers entity) ;
}
