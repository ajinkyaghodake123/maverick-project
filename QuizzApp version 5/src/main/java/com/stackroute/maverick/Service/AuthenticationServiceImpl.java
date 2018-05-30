package com.stackroute.maverick.Service;

import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.maverick.domain.AuthenticationModel;
import com.stackroute.maverick.domain.User;
import com.stackroute.maverick.repositories.UserRepositories;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
	@Autowired
	UserRepositories userRepository;
	UserServiceImpl userService;
	 User element;
	@Override
	public User authentication(User athenticationModel) {
		
		String condition = "";
		//checking the login details
		System.out.println("inside authservice");
		athenticationModel.getEmail();
		athenticationModel.getPassword();
		System.out.println("uname===="+athenticationModel.getEmail()+" pass ====="+athenticationModel.getPassword());
		
		//trying to get data of user from database

		
		Iterable<User> userList=getAllUsers();
		//System.out.println("userList ->>>>>"+userList);
		for (Iterator<User> iter = userList.iterator(); iter.hasNext(); ) {
		    element = iter.next();
		    System.out.println("elemnt user -->> "+element.getEmail()+" pass ->>"+element.getPassword());
		
		if(athenticationModel.getEmail().equals(element.getEmail()) && athenticationModel.getPassword().equals(element.getPassword()))
		{
			System.out.println("success>>>");
			
			condition="matched";
			break;

		}
		else
		{
			System.out.println("problem ");
			condition="mismatched";
			
		}
		}
		if(condition=="matched")
		{
			System.out.println("matched");
			System.out.println("==========="+element.getUserId()+"================"+element.getUserName());
			return element;
		}
		else {
			System.out.println("mismatched returning null ");
			return null;
		}
	}
	
	public Iterable<User> getAllUsers() {
		Iterable<User> userList = userRepository.findAll();
		//System.out.println("in user service>>>>"+userList);
		return userList;
	}

	

}
