package com.manageItem.item.dto;

public class SellerInfoDto {
    private String email;
    private int addressId;
    private String username;

    public SellerInfoDto() {
    }

    public SellerInfoDto(String email, int addressId, String username) {
        this.email = email;
        this.addressId = addressId;
        this.username = username;
    }

    public int getAddressId() {
        return addressId;
    }

    public void setAddressId(int addressId) {
        this.addressId = addressId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    
}
