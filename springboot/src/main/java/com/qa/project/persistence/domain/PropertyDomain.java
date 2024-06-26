package com.qa.project.persistence.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class PropertyDomain {
    @Id
    @GeneratedValue
    private Integer id;
    private String status;
    private String address1;
    private String address2;
    private String city;
    private String county;
    private String postcode;
    private Integer price;
    private String type;
    private Integer bedrooms;
    private String details;

    public PropertyDomain(String status, String address1, String address2, String city, String county, String postcode,
            Integer price, String type, Integer bedrooms, String details) {
        this.status = status;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.county = county;
        this.postcode = postcode;
        this.price = price;
        this.type = type;
        this.bedrooms = bedrooms;
        this.details = details;

    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCounty() {
        return county;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getBedrooms() {
        return bedrooms;
    }

    public void setBedrooms(Integer bedrooms) {
        this.bedrooms = bedrooms;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }
}
