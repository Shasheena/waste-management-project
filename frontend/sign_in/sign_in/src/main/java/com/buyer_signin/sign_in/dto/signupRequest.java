package com.buyer_signin.sign_in.dto;

public class signupRequest {
    public String email;
    public String first_name;
    public String last_name;
    public String username;
    public String password;
    public String city;
    public int province_id;
    public int district_id;
    public String other;
    public String postalCode;

    

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getFirst_name() {
        return first_name;
    }
    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }
    public String getLast_name() {
        return last_name;
    }
    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
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

    
}
