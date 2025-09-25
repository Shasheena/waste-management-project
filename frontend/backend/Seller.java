package com.seller.auth.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;

@Entity
@Table(name = "seller")
public class Seller {
    

    @Id
    @Column(name = "seller_email")
    public String email;
    
    @Column(name = "seller_fname")
    public String fname;

    @Column(name = "seller_lname")
    public String lname;

    @Column(name = "seller_username")
    public String username;

    @Column(name = "seller_password")
    public String password;
    

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_address_id")
    private Address address;
    

    @Version
    private int version;

    
    public int getVersion() {
        return version;
    }
    public void setVersion(int version) {
        this.version = version;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getFname() {
        return fname;
    }
    public void setFname(String fname) {
        this.fname = fname;
    }
    public String getLname() {
        return lname;
    }
    public void setLname(String lname) {
        this.lname = lname;
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
    public Address getAddress() {
        return address;
    }
    public void setAddress(Address address) {
        this.address = address;
    }
    
    
}


