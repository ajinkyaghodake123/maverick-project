package com.stackroute.maverick.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.stackroute.maverick.domain.*;
import com.stackroute.maverick.repositories.CategoriesRepositories;

//import com.stackroute.game.domain.ActualData;
@Service
public class Receiver { 
	@Autowired
	CategoriesRepositories catrepo;
/*
     * KafkaListner listens to the topic mentioned
     * and saves the data each time if there is
     * a change in the topic
     */
	private static final Logger log = LoggerFactory.getLogger(Receiver.class);        
    @KafkaListener(topics="recommendation-user.t")
    	public void processEvent(LocalUser user) {
        System.out.println("calling from kafka consumer");
        System.out.println("received content = " + user.toString());
        log.info("received content = '{}'", user.toString());  
        }
    @KafkaListener(topics="Categories.t")
    public void categories(CategoriesModel user) {
    	catrepo.save(user);
        System.out.println("calling from kafka consumer to categories");
        System.out.println("received content = " + user.toString());
        log.info("received content = '{}'", user.toString());  
        }
    	

}
