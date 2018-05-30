package com.stackroute.maverick.Service;

import java.util.Optional;

import com.stackroute.maverick.domain.CategoriesModel;
import com.stackroute.maverick.domain.SelectedCategoriesModel;
import com.stackroute.maverick.domain.User;

public interface UserService {

	/*public User addUser(User user);
	public Iterable<User> getAllUsers();
	public User updateUserById(int id, User user);*/
	User save(User user);
	CategoriesModel save(CategoriesModel cat);
	SelectedCategoriesModel save(SelectedCategoriesModel cat);
	Iterable<User> findAll();
	Iterable<CategoriesModel> findAllCategories();
	void delete(int id);
	User updateUserById(int id1, User user);
	Optional<User> findById(int id);
	User findByid(int id);
	User getUser(int userId);
	User findByEmail(String email);
	User findByName(String userName);
}