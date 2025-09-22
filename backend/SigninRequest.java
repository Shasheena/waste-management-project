package com.seller.auth.dto;

public class SigninRequest {
    
    public String seller_email;
    public String seller_password;

    public String getSeller_email() {
        return seller_email;
    }
    public void setSeller_email(String seller_email) {
        this.seller_email = seller_email;
    }
    public String getSeller_password() {
        return seller_password;
    }
    public void setSeller_password(String seller_password) {
        this.seller_password = seller_password;
    }

    
}
