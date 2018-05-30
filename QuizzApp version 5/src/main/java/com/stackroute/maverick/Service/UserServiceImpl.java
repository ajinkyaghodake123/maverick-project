package com.stackroute.maverick.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.maverick.domain.CategoriesModel;
import com.stackroute.maverick.domain.SelectedCategoriesModel;
import com.stackroute.maverick.domain.User;
import com.stackroute.maverick.repositories.CategoriesRepositories;
import com.stackroute.maverick.repositories.SelectedCategoryRepo;
import com.stackroute.maverick.repositories.UserRepositories;



@Service(value = "userService")
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepositories userDao; 
	
	@Autowired
	private CategoriesRepositories categoryDao;
	 
	@Autowired
	private SelectedCategoryRepo selectedDao;
	
	 public Iterable<User> findAll() {
		 Iterable<User> list = userDao.findAll();
	        
	        return list;
	 }
	 
	 @Override
	 public void delete(int id) {
	        userDao.deleteById(id);
	 }
	 
	 @Override
	    public Optional<User> findById(int id) {
	        return userDao.findById(id);
	 }  
	 
	 @Override
	 public User save(User user) {
	       return userDao.save(user);
	   }
	 
	@Override
	public User updateUserById(int id1, User user) {
		Optional<User> u = userDao.findById(id1);
		userDao.save(user);
		return user;
	}

	@Override
	public User findByid(int id) {
		// TODO Auto-generated method stub
		System.out.println("Id========"+id);
		return userDao.findById(id).orElse(null);
	}
	
	public User getUser(int userId) {
		System.out.println("inside getuser-----"+userId);
		return userDao.findById(userId).orElse(null);
	}

	@Override
	public CategoriesModel save(CategoriesModel cat) {
		// TODO Auto-generated method stub
		 return categoryDao.save(cat);
	}

	@Override
	public Iterable<CategoriesModel> findAllCategories() {
		// TODO Auto-generated method stub
		Iterable<CategoriesModel> categoryList = categoryDao.findAll();
        
        return categoryList;
	}

	@Override
	public User findByEmail(String email) {
		
		return userDao.findByEmail(email);
	}

	@Override
	public SelectedCategoriesModel save(SelectedCategoriesModel cat) {
		
		return selectedDao.save(cat);
	}

	@Override
	public User findByName(String userName) {
		
		return userDao.findByUserName(userName);
	}


}
