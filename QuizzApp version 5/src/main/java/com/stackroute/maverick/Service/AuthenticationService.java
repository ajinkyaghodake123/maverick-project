package com.stackroute.maverick.Service;
import com.stackroute.maverick.domain.AuthenticationModel;
import com.stackroute.maverick.domain.User;


public interface AuthenticationService {
	
	public User authentication(User user);
	
}
