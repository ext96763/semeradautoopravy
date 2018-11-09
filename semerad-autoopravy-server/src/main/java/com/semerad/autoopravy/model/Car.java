package com.semerad.autoopravy.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Collection;
import java.util.Date;

public class Car {

    @JsonProperty
    private Long carId;

    @JsonProperty
    private Long carUserId;

    @JsonProperty
    private String win;

    @JsonProperty
    private String spz;

    @JsonProperty
    private Long km;

    @JsonProperty
    private String carInfo;

    @JsonProperty
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    private Date startDateError;


    @JsonProperty
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    private Date endDateError;

    @JsonProperty
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    private Date featureRepairDate;

    @JsonProperty
    private Boolean doneWork;

    @JsonProperty
    private Boolean exist;

    @JsonProperty
    private  String buyedParts;

    @JsonProperty
    private Collection<Repair> repairs;

    public Car(){};

    public Car(Long carId, Long carUserId, String win, String spz, Long km, String carInfo, Date startDateError, Date endDateError, Date featureRepairDate, Boolean doneWork, Boolean exist, String buyedParts, Collection<Repair> repairs) {
        this.carId = carId;
        this.carUserId = carUserId;
        this.win = win;
        this.spz = spz;
        this.km = km;
        this.carInfo = carInfo;
        this.startDateError = startDateError;
        this.endDateError = endDateError;
        this.featureRepairDate = featureRepairDate;
        this.doneWork = doneWork;
        this.exist = exist;
        this.buyedParts = buyedParts;
        this.repairs = repairs;
    }

    public Long getCarId() {
        return carId;
    }

    public void setCarId(Long carId) {
        this.carId = carId;
    }

    public Long getCarUserId() {
        return carUserId;
    }

    public void setCarUserId(Long carUserId) {
        this.carUserId = carUserId;
    }

    public String getWin() {
        return win;
    }

    public void setWin(String win) {
        this.win = win;
    }

    public String getSpz() {
        return spz;
    }

    public void setSpz(String spz) {
        this.spz = spz;
    }

    public Long getKm() {
        return km;
    }

    public void setKm(Long km) {
        this.km = km;
    }

    public String getCarInfo() {
        return carInfo;
    }

    public void setCarInfo(String carInfo) {
        this.carInfo = carInfo;
    }

    public Date getStartDateError() {
        return startDateError;
    }

    public void setStartDateError(Date startDateError) {
        this.startDateError = startDateError;
    }

    public Date getEndDateError() {
        return endDateError;
    }

    public void setEndDateError(Date endDateError) {
        this.endDateError = endDateError;
    }

    public Date getFeatureRepairDate() {
        return featureRepairDate;
    }

    public void setFeatureRepairDate(Date featureRepairDate) {
        this.featureRepairDate = featureRepairDate;
    }

    public Boolean getDoneWork() {
        return doneWork;
    }

    public void setDoneWork(Boolean doneWork) {
        this.doneWork = doneWork;
    }

    public Boolean getExist() {
        return exist;
    }

    public void setExist(Boolean exist) {
        this.exist = exist;
    }

    public String getBuyedParts() {
        return buyedParts;
    }

    public void setBuyedParts(String buyedParts) {
        this.buyedParts = buyedParts;
    }

    public Collection<Repair> getRepairs() {
        return repairs;
    }

    public void setRepairs(Collection<Repair> repairs) {
        this.repairs = repairs;
    }

    @Override
    public String toString() {
        return "Car{" +
                "carId=" + carId +
                ", carUserId=" + carUserId +
                ", win='" + win + '\'' +
                ", spz='" + spz + '\'' +
                ", km=" + km +
                ", carInfo='" + carInfo + '\'' +
                ", startDateError=" + startDateError +
                ", endDateError=" + endDateError +
                ", featureRepairDate=" + featureRepairDate +
                ", doneWork=" + doneWork +
                ", exist=" + exist +
                ", buyedParts='" + buyedParts + '\'' +
                ", repairs=" + repairs +
                '}';
    }
}
