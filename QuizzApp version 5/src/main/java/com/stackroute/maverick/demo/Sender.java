package com.stackroute.maverick.demo;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.stackroute.maverick.domain.*;

@Service
public class Sender {  
	private static final Logger log = LoggerFactory.getLogger(Sender.class); 
	@Autowired
    private KafkaTemplate<String, Object> kafkaTemplate; 
	@Value("User_Data.t")
    String kafkaTopic;   
	
	public void sendUser(User user) {    
    	log.info("sending data='{}'", user.toString());
    	System.out.println("in kafka--"+user);
        kafkaTemplate.send("new-user-created.t", user);
    }
        public void sendUserDetails(User user) {    
    	log.info("sending data='{}'", user.toString());
    	System.out.println("UserId in kafka-->>>>>>>>>>>>>>"+user.toString());
        kafkaTemplate.send("userDetails-login.t", user);
    }
	public void sendMongoUser(UserMongo user) {    
    	log.info("sending data='{}'", user);
        kafkaTemplate.send("mongoTopic.t", user);
    }
	public void sendCategories(SelectedCategoriesModel user) 
	{    
    	log.info("sending data='{}'", user);
    	System.out.println("selected_categories in kafka--"+user);
        kafkaTemplate.send("selected_categories.t", user);
    }
	
}
