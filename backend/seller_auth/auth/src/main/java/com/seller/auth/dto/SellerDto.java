package com.seller.auth.dto;

public class SellerDto {
    private String email;
    // private int addressId;
    // private String username;
    
    public SellerDto() {
    }

    // public SellerDto(int addressId, String username) {
    //     this.addressId = addressId;
    //     this.username = username;
    // }

    // public int getAddressId() {
    //     return addressId;
    // }

    // public void setAddressId(int addressId) {
    //     this.addressId = addressId;
    // }

    // public String getUsername() {
    //     return username;
    // }

    // public void setUsername(String username) {
    //     this.username = username;
    // }

    public SellerDto(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    
}
