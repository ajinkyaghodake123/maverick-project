package com.stackroute.maverick.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.maverick.domain.User;

@Repository
public interface UserRepositories extends CrudRepository<User, Integer> {

	public User findByEmail(String name);
	public User findByUserName(String name);
}
