package com.manageItem.item.dto;

public class SellerInfoDto {
    private String seller_email;
    private String seller_fname;
    private String seller_lname;
    private String seller_username;
    private int address_id;
    private int version;

    public SellerInfoDto() {
    }

    public SellerInfoDto(String seller_email, String seller_fname, String seller_lname, String seller_username,
            int address_id, int version) {
        this.seller_email = seller_email;
        this.seller_fname = seller_fname;
        this.seller_lname = seller_lname;
        this.seller_username = seller_username;
        this.address_id = address_id;
        this.version = version;
    }

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

    public int getAddress_id() {
        return address_id;
    }

    public void setAddress_id(int address_id) {
        this.address_id = address_id;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    
    
}  