package com.stackroute.maverick.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import org.hibernate.annotations.NaturalId;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/*import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;*/

@Entity
@Table(name = "user_table")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userId;
	@Column
	private String userName;
	@Column
	private String password;
	@Column
	private String email;
	@Column
	private String location;
	@Column
	private String mobile;
	@Column
	private String gender;
	@Column
	private String age;
	private String role;
//	@ElementCollection
//	@CollectionTable(name="dis_categories",joinColumns=@JoinColumn(name="categoryId"))
//	private List<CategoriesModel> favCategories=new ArrayList<CategoriesModel>();
	
	
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public User(int userId, String userName, String password, String email, String location, String mobile,
			String gender, String age, String role) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.location = location;
		this.mobile = mobile;
		this.gender = gender;
		this.age = age;
		this.role = role;
	}
	public User()
	{
		
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", password=" + password + ", email=" + email
				+ ", location=" + location + ", mobile=" + mobile + ", gender=" + gender + ", age=" + age + ", role="
				+ role + ", favCategories=" + "]";
	}	
	
}
