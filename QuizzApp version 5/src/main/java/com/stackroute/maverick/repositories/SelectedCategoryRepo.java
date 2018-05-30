package com.stackroute.maverick.repositories;

import org.springframework.data.repository.CrudRepository;

import com.stackroute.maverick.domain.SelectedCategoriesModel;

public interface SelectedCategoryRepo extends CrudRepository <SelectedCategoriesModel, Integer> {

}
