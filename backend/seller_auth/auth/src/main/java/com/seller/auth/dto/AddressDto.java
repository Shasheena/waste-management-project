package com.seller.auth.dto;

public class AddressDto {
    private String city;
    private String district;
    private String province;
    private String other;

    public AddressDto() {}

    public AddressDto(String city, String district, String province, String other) {
        this.city = city;
        this.district = district;
        this.province = province;
        this.other = other;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getOther() {
        return other;
    }

    public void setOther(String other) {
        this.other = other;
    }
}
