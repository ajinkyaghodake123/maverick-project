package com.stackroute.maverick.repositories;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.stackroute.maverick.domain.UserMongo;

public interface UserMongoRepo extends MongoRepository<UserMongo, Integer>{

}