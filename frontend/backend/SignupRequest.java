package com.seller.auth.dto;

public class SignupRequest {
    public String seller_email;
    public String seller_fname;
    public String seller_lname;
    public String seller_username;
    public String seller_password;
    public String city;
    public int province_id;
    public int district_id;
    public String other;
    public String postalCode;
    
    public String getSeller_email() {
        return seller_email;
    }
    public void setSeller_email(String seller_email) {
        this.seller_email = seller_email;
    }
    public String getSeller_fname() {
        return seller_fname;
    }
    public void setSeller_fname(String seller_fname) {
        this.seller_fname = seller_fname;
    }
    public String getSeller_lname() {
        return seller_lname;
    }
    public void setSeller_lname(String seller_lname) {
        this.seller_lname = seller_lname;
    }
    public String getSeller_username() {
        return seller_username;
    }
    public void setSeller_username(String seller_username) {
        this.seller_username = seller_username;
    }
    public String getSeller_password() {
        return seller_password;
    }
    public void setSeller_password(String seller_password) {
        this.seller_password = seller_password;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public int getProvince_id() {
        return province_id;
    }
    public void setProvince_id(int province_id) {
        this.province_id = province_id;
    }
    public int getDistrict_id() {
        return district_id;
    }
    public void setDistrict_id(int district_id) {
        this.district_id = district_id;
    }
    public String getOther() {
        return other;
    }
    public void setOther(String other) {
        this.other = other;
    }
    public String getPostalCode() {
        return postalCode;
    }
    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    
}
