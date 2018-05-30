package com.stackroute.maverick.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "display_categories")
public class CategoriesModel {
	
	@Id
	 private int categoryId;
	 private String categoryName;
	 private String categoryImage;
	 
	 
	
	public int getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public String getCategoryImage() {
		return categoryImage;
	}
	public void setCategoryImage(String categoryImage) {
		this.categoryImage = categoryImage;
	}
	 
		@Override
		public String toString() {
			return "CategoriesModel [categoryId=" + categoryId + ", categoryName=" + categoryName + ", categoryImage="
					+ categoryImage + "]";
		}
	
	
}
