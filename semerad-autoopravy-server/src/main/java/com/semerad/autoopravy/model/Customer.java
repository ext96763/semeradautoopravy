package com.semerad.autoopravy.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Collection;
import java.util.Date;


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
    private boolean exists;

    @JsonProperty
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    private Date startDate;

    @JsonProperty
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    private Date endDate;

    @JsonProperty
    private Collection<Car> cars;

    public Customer(){};

    public Customer(Long userId, String userName, String userForeName, Long userRc, String userDetail, Long userPhone, String userEmail, boolean exists, Date startDate, Date endDate, Collection<Car> cars) {
        this.userId = userId;
        this.userName = userName;
        this.userForeName = userForeName;
        this.userRc = userRc;
        this.userDetail = userDetail;
        this.userPhone = userPhone;
        this.userEmail = userEmail;
        this.exists = exists;
        this.startDate = startDate;
        this.endDate = endDate;
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

    public boolean isExists() {
        return exists;
    }

    public void setExists(boolean exists) {
        this.exists = exists;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
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
                ", exists=" + exists +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", cars=" + cars +
                '}';
    }
}
