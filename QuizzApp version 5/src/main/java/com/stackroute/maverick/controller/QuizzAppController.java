package com.stackroute.maverick.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.maverick.Service.AuthenticationService;
import com.stackroute.maverick.Service.LoggedUserService;
import com.stackroute.maverick.Service.UserService;
import com.stackroute.maverick.Service.UserServiceMongo;
import com.stackroute.maverick.demo.Sender;
import com.stackroute.maverick.domain.AuthenticationModel;
import com.stackroute.maverick.domain.CategoriesModel;
import com.stackroute.maverick.domain.LoggedUsers;
import com.stackroute.maverick.domain.SelectedCategoriesModel;
import com.stackroute.maverick.domain.User;
import com.stackroute.maverick.domain.UserMongo;
import com.stackroute.maverick.token.JwtTokenProvider;

import io.micrometer.core.annotation.Timed;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;


@CrossOrigin("*")
@RequestMapping("api/q1")
@RestController
@Api(value = "QuizzAppControllerAPI")
@Controller
public class QuizzAppController {
	
	
	@Bean SelectedCategoriesModel selectedCategoriesModel()
	{
		return new SelectedCategoriesModel();
	}
	
	
	@Autowired
	UserService userService;
	
	@Autowired
	AuthenticationService authenticationService;
	
	@Autowired
	UserServiceMongo usermongo;
	
	@Autowired
	UserMongo userMongoModel;
	
	AuthenticationManager authenticationManager; 
	 
	@Autowired
	 LoggedUsers loggedUser;
	 
	@Autowired
	LoggedUserService loggedService;
	 
	@Autowired
	JwtTokenProvider tokenProvider;
	
	@Autowired
	Sender sender;
	
	@Autowired
	SelectedCategoriesModel selectedCat;

	
	private String jwt;
	
	@Bean
	public LoggedUsers loggedUsers() {
		return new LoggedUsers();
	}
	 
	//
	
	// constructor
	public QuizzAppController() {}
		
	@Timed(    value="quiz.login.Getrequest",
	            histogram=true,
	            percentiles= {0.95},
	            extraTags= {"version", "1.0"}
	)
	@RequestMapping(value = "/getall", method = RequestMethod.GET)
	@ApiOperation("Gets the all users")
	@ApiResponses(value = {@ApiResponse(code = 200 ,message = "ok", response = User.class)})
	public ResponseEntity<Iterable<User>> showAllUsers() {
		
		
		return new ResponseEntity<Iterable<User>>(userService.findAll(),HttpStatus.OK);
	}
	@Timed(value = "quiz.user-service.addUser", histogram = true, percentiles = { 0.95 }, extraTags = {
            "version", "1.0" })
	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
	@ApiOperation("Adds the user")
	@ApiResponses(value = {@ApiResponse(code = 200 ,message = "ok", response = User.class)})
	public ResponseEntity<User> addRestaurant(@RequestBody User user) {
		System.out.println("user in register  ==== "+user.getEmail()+" "+user.getGender());
		
		User u = userService.findByEmail(user.getEmail());
		//System.out.println("duplicate user matching----"+u.getEmail()+" "+user.getEmail());
		//if(u.getEmail().equals(user.getEmail())) {
		//	return null; 
		//}
		// else {
		if(user.getEmail()=="admin.com" && user.getPassword()=="admin") {
			user.setRole("ADMIN");
		}
		else {
		user.setRole("USER");
		}
		
		User newUser = userService.save(user);
		//User u = userService.findByEmail(email);
		sender.sendUser(newUser);
		System.out.println("gender -----"+newUser.getGender());
		return new ResponseEntity<User>(newUser, HttpStatus.OK);
		//}	
	}
	
	@Timed(value = "quiz.user-service.getallCategories", histogram = true, percentiles = { 0.95 }, extraTags = {
            "version", "1.0" })
	@RequestMapping(value = "/getallCategories", method = RequestMethod.GET)
	@ApiOperation("Gets the all users")
	@ApiResponses(value = {@ApiResponse(code = 200 ,message = "ok", response = User.class)})
	public ResponseEntity<Iterable<CategoriesModel>> showAllCategories() {
		System.out.println("inside getallcategories controller--");
		
		return new ResponseEntity<Iterable<CategoriesModel>>(userService.findAllCategories(),HttpStatus.OK);
	}

	@Timed(value = "quiz.user-service.addCategory", histogram = true, percentiles = { 0.95 }, extraTags = {
            "version", "1.0" })
	@RequestMapping(value = "/addCategory", method = RequestMethod.POST)
	@ApiOperation("Adds the category")
	@ApiResponses(value = {@ApiResponse(code = 200 ,message = "ok", response = User.class)})
	public ResponseEntity<CategoriesModel> addCategory(@RequestBody CategoriesModel categories) {
		CategoriesModel cat = userService.save(categories);
		System.out.println("categories added ======"+cat.getCategoryName());
		return new ResponseEntity<CategoriesModel>(cat, HttpStatus.OK);
		
	}
	
	@Timed(value = "quiz.user-service.addSelectedCategories_userId", histogram = true, percentiles = { 0.95 }, extraTags = {
            "version", "1.0" })
	@RequestMapping(value = "/addSelectedCategories/{userId}", method = RequestMethod.POST)
	@ApiOperation("Adds the selected categories")
	@ApiResponses(value = {@ApiResponse(code = 200 ,message = "ok", response = User.class)})
	public ResponseEntity<List<SelectedCategoriesModel>> addSelectedCategory(@PathVariable("userId") String userId,@RequestBody List<CategoriesModel> categories) {
//		System.out.println("list size----"+categories.size());
		System.out.println("selected castegories===>> "+categories.toString());
		System.out.println("userId is "+userId);
		System.out.println("data in slected_table: "+userId+" "+categories.get(0).getCategoryId());
		List<SelectedCategoriesModel> catlist=new ArrayList<SelectedCategoriesModel>();
		for(int i=0;i<categories.size();i++)
		{
			//SelectedCategoriesModel selectedCat=null;
			//new SelectedCategoriesModel();
			System.out.println("Printing before parsing" + userId);
			selectedCat.setUserId(Integer.parseInt(userId));
			selectedCat.setSelectedCategoryId(categories.get(i).getCategoryId());
			System.out.println("cat after setting ==>"+selectedCat.getUserId());
			catlist.add(userService.save(selectedCat));
			sender.sendCategories(selectedCat);
		}
		//sender.sendCategories(catlist);

		return new ResponseEntity<List<SelectedCategoriesModel>>(catlist, HttpStatus.OK);
		//return null;
	}
	
	@Timed(value = "quiz.user-service.auth", histogram = true, percentiles = { 0.95 }, extraTags = {
            "version", "1.0" })
	@RequestMapping(value = "/auth", method = RequestMethod.POST)
	//public ResponseEntity<AuthenticationModel> authenticateUsers(@RequestBody AuthenticationModel authenticationModel)
	public ResponseEntity<User> authenticateUsers(@RequestBody User user)
	{
		
		Authentication authentication = authenticate(user);
		SecurityContextHolder.getContext().setAuthentication(authentication);
	    jwt = tokenProvider.generateToken(authentication);
	   //tokenProvider.validateToken(jwt)
	  
	    loggedUser.setToken(jwt);
	    loggedUser.setEmail(user.getEmail());
	    loggedUser.setPassword(user.getPassword());
	    //loggedUser
	    
	    loggedService.addLogedUser(loggedUser);
	    
		User u = userService.findByEmail(user.getEmail());
		sender.sendUserDetails(u);
		//return jwt;
	    return new ResponseEntity<User>(authenticationService.authentication(user),HttpStatus.OK);
	}

	@Timed(value = "quiz.user-service.user_id", histogram = true, percentiles = { 0.95 }, extraTags = {
            "version", "1.0" })
	 @GetMapping("/user/{id}")
	 public ResponseEntity<User> findUserById(User user, @PathVariable("id") String id) throws Exception 
	 {   
		 user.setUserId(Integer.parseInt(id));           
		 User user1 =userService.findByid(Integer.parseInt(id));  
		 //sender.sendUser(user1);        
		 return new ResponseEntity<User>(user1, HttpStatus.OK);
	 }
	 
	@Timed(value = "quiz.user-service.logout", histogram = true, percentiles = { 0.95 }, extraTags = {
            "version", "1.0" })
	@RequestMapping(value = "/logout", method = RequestMethod.DELETE)
	public String logout(@RequestBody LoggedUsers cred) {
		if(cred.getEmail().isEmpty()) {
			return "no user with given email logged in";
			
		}
		else {
			loggedService.removeLoggedUser(cred);
			return "user logged out";
		}
	}

	@Timed(value = "quiz.user-service.update_id", histogram = true, percentiles = { 0.95 }, extraTags = {
            "version", "1.0" })
	@RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
	@ApiOperation("update the user on the id basis")
	@ApiResponses(value = {@ApiResponse(code = 200 ,message = "ok", response = User.class)})
	public ResponseEntity updateUserbyId(@PathVariable(value = "id") String id, @RequestBody User user) {
		int id1=Integer.parseInt(id);
		return new ResponseEntity<>(userService.updateUserById(id1, user),HttpStatus.OK);
	}
	
	@Timed(value = "quiz.user-service.getUser_id", histogram = true, percentiles = { 0.95 }, extraTags = {
            "version", "1.0" })
	@RequestMapping(value = "/getUser/{id}", method = RequestMethod.GET)
	public ResponseEntity<User> findUserbyId(@PathVariable(value = "id") String id) {
		User u = userService.getUser(Integer.parseInt(id));
		System.out.println("User comming");
		return new ResponseEntity<User>(u,HttpStatus.OK);
	}
	
	@Timed(value = "quiz.user-service.getUserByEmail_email", histogram = true, percentiles = { 0.95 }, extraTags = {
            "version", "1.0" })
	@RequestMapping(value = "/getUserByEmail/{email}", method = RequestMethod.GET)
	public ResponseEntity<User> findUserbyEmail(@PathVariable(value = "email") String email) {
		//User u = userService.getUser(Integer.parseInt(id));
		User u = userService.findByEmail(email);
		//sender.sendUser(u);
		System.out.println("User comming:"+u);
		return new ResponseEntity<User>(u,HttpStatus.OK);
	}
         
        @RequestMapping(value = "/produceUserId/{id}", method = RequestMethod.GET)
	public ResponseEntity<String> findUserbyEmail(@PathVariable(value = "id") int id) {
		
		//sender.sendUserId(id);
		System.out.println("User comming:"+id);
		return new ResponseEntity<String>("done",HttpStatus.OK);
	}
	
	
	@Timed(value = "quiz.user-service.getUserByName_userName", histogram = true, percentiles = { 0.95 }, extraTags = {
            "version", "1.0" })
	@RequestMapping(value = "/getUserByName/{userName}", method = RequestMethod.GET)
	public ResponseEntity<User> findUserbyName(@PathVariable(value = "userName") String userName) {
		//User u = userService.getUser(Integer.parseInt(id));
		User u = userService.findByName(userName);
		//sender.sendUser(u);
		System.out.println("User getby name--:"+u);
		return new ResponseEntity<User>(u,HttpStatus.OK);
	}
	public Authentication authenticate(User usernamePasswordAuthenticationToken) throws AuthenticationException {
		// TODO Auto-generated method stub
		return new UsernamePasswordAuthenticationToken(
                usernamePasswordAuthenticationToken.getEmail(),
                usernamePasswordAuthenticationToken.getPassword()
        );
	}
	
	
}
