package com.stackroute.maverick.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.maverick.domain.User;
import com.stackroute.maverick.domain.UserMongo;
import com.stackroute.maverick.repositories.UserMongoRepo;
import com.stackroute.maverick.repositories.UserRepositories;

@Service
public class UserServiceMongo {

	@Autowired
	UserMongoRepo userRepository;
	
	
	public UserMongo addUser(UserMongo mongou) {
		userRepository.save(mongou);
		System.out.println("service getting "+mongou.getEmail());
		System.out.println("added in service of mongo "+mongou.getLocation()+"-----"+mongou.getAge()+"   "+mongou.getUserId());
		return mongou;
	}

	
	public Iterable<UserMongo> getAllUsers() {
		Iterable<UserMongo> userList = userRepository.findAll();
		System.out.println("in user service>>>>"+userList);
		return userList;
	}

	public UserMongo getUser(int userId) {
				return userRepository.findById(userId).orElse(null);
	}

	/*
	public User updateUserById(int id, User user) {
		User updateRestaurant = userRepository.save(user);
		return updateRestaurant;
	}

	
	public User getUser(int userId) {
				return userRepository.findById(userId).orElse(null);
	}
*/
	
}