package com.semerad.autoopravy.model;


import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Collection;


public class Customer {

    @JsonProperty
    private Long userId;

    @JsonProperty
    private String userName;

    @JsonProperty
    private String userForeName;

    @JsonProperty
    private Long userRc;

    @JsonProperty
    private String userDetail;

    @JsonProperty
    private Long userPhone;

    @JsonProperty
    private String userEmail;

    @JsonProperty
    private Collection<Car> cars;

    public Customer(){};

    public Customer(Long userId, String userName, String userForeName, Long userRc, String userDetail, Long userPhone, String userEmail, Collection<Car> cars) {
        this.userId = userId;
        this.userName = userName;
        this.userForeName = userForeName;
        this.userRc = userRc;
        this.userDetail = userDetail;
        this.userPhone = userPhone;
        this.userEmail = userEmail;
        this.cars = cars;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserForeName() {
        return userForeName;
    }

    public void setUserForeName(String userForeName) {
        this.userForeName = userForeName;
    }

    public Long getUserRc() {
        return userRc;
    }

    public void setUserRc(Long userRc) {
        this.userRc = userRc;
    }

    public String getUserDetail() {
        return userDetail;
    }

    public void setUserDetail(String userDetail) {
        this.userDetail = userDetail;
    }

    public Long getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(Long userPhone) {
        this.userPhone = userPhone;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public Collection<Car> getCars() {
        return cars;
    }

    public void setCars(Collection<Car> cars) {
        this.cars = cars;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", userForeName='" + userForeName + '\'' +
                ", userRc=" + userRc +
                ", userDetail='" + userDetail + '\'' +
                ", userPhone=" + userPhone +
                ", userEmail='" + userEmail + '\'' +
                ", cars=" + cars +
                '}';
    }
}
