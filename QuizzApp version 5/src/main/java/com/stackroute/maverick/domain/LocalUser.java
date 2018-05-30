package com.stackroute.maverick.domain;

import java.util.Arrays;

public class LocalUser {
	
    private Long id;
    private String name;
    private String gender;
    private String location;
    private String[] fav_category;
            public Long getId() {
        return id;
    }        public void setId(Long id) {
        this.id = id;
    }        public String getName() {
        return name;
    }        public void setName(String name) {
        this.name = name;
    }        public String getGender() {
        return gender;
    }
        public void setGender(String gender) {
        this.gender = gender;
    }        public String[] getFav_category() {
        return fav_category;
    }        public void setFav_category(String[] fav_category) {
        this.fav_category = fav_category;
    }        public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }

    public String toString() {
        return "User [id=" + id + ", name=" + name + ", gender=" + gender + ", location=" + location + ", fav_category="
                + Arrays.toString(fav_category) + "]";
    }
}
