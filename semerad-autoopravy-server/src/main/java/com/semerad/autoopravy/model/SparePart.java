package com.semerad.autoopravy.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;

public class SparePart {

    @JsonProperty
    private Long partId;

    @JsonProperty
    private Long repairId;

    @JsonProperty
    private Long carId;

    @JsonProperty
    private Long partNumber;

    @JsonProperty
    private String partDetail;

    @JsonProperty
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    private Date repairDate;

    @JsonProperty
    private Long partUserId;

    public SparePart(){};

    public SparePart(Long partId, Long repairId, Long carId, Long partNumber, String partDetail, Date repairDate, Long partUserId) {
        this.partId = partId;
        this.repairId = repairId;
        this.carId = carId;
        this.partNumber = partNumber;
        this.partDetail = partDetail;
        this.repairDate = repairDate;
        this.partUserId = partUserId;
    }

    public Long getPartId() {
        return partId;
    }

    public void setPartId(Long partId) {
        this.partId = partId;
    }

    public Long getRepairId() {
        return repairId;
    }

    public void setRepairId(Long repairId) {
        this.repairId = repairId;
    }

    public Long getCarId() {
        return carId;
    }

    public void setCarId(Long carId) {
        this.carId = carId;
    }

    public Long getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(Long partNumber) {
        this.partNumber = partNumber;
    }

    public String getPartDetail() {
        return partDetail;
    }

    public void setPartDetail(String partDetail) {
        this.partDetail = partDetail;
    }

    public Date getRepairDate() {
        return repairDate;
    }

    public void setRepairDate(Date repairDate) {
        this.repairDate = repairDate;
    }

    public Long getPartUserId() {
        return partUserId;
    }

    public void setPartUserId(Long partUserId) {
        this.partUserId = partUserId;
    }

    @Override
    public String toString() {
        return "SparePart{" +
                "partId=" + partId +
                ", repairId=" + repairId +
                ", carId=" + carId +
                ", partNumber=" + partNumber +
                ", partDetail='" + partDetail + '\'' +
                ", repairDate=" + repairDate +
                ", partUserId=" + partUserId +
                '}';
    }
}
