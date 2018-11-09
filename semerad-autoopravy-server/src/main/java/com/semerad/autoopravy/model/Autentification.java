package com.semerad.autoopravy.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Autentification {

    @JsonProperty
    String userName;

    @JsonProperty
    String userPassword;

    public Autentification(String userName, String userPassword) {
        this.userName = userName;
        this.userPassword = userPassword;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }
}