package com.stackroute.maverick.repositories;

import org.springframework.data.repository.CrudRepository;

import com.stackroute.maverick.domain.CategoriesModel;

public interface CategoriesRepositories extends CrudRepository<CategoriesModel, Integer> {

}
