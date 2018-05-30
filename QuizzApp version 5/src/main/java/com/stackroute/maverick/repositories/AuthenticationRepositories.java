package com.stackroute.maverick.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.maverick.domain.User;

@Repository
public interface AuthenticationRepositories extends CrudRepository<User, Integer>{

}
