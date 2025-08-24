package com.buyer_signin.sign_in.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;


@Entity
@Table(name = "address")

public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int address_id;

    private String city;

    @ManyToOne
    @JoinColumn(name = "province_id", nullable = false)
    private Province province_id;

    @ManyToOne
    @JoinColumn(name = "district_id", nullable = false)
    private District district_id;

    private String other;

    @Column(name = "postal_code")
    private String postalCode;

    @Version
    private int version;

    public int getId() {
        return address_id;
    }

    public void setId(int address_id) {
        this.address_id = address_id;
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

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public Province getProvince_id() {
        return province_id;
    }

    public void setProvince_id(Province province_id) {
        this.province_id = province_id;
    }

    public District getDistrict_id() {
        return district_id;
    }

    public void setDistrict_id(District district_id) {
        this.district_id = district_id;
    }

    
    
}
