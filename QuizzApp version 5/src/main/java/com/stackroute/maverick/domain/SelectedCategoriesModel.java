package com.stackroute.maverick.domain;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "selected_categories")
public class SelectedCategoriesModel {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int tid;
	 private int SelectedCategoryId;
	private int userId;
	
	public int getTid() {
		return tid;
	}
	public void setTid(int tid) {
		this.tid = tid;
	}
	public int getSelectedCategoryId() {
		return SelectedCategoryId;
	}
	public void setSelectedCategoryId(int selectedCategoryId) {
		SelectedCategoryId = selectedCategoryId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	
}
