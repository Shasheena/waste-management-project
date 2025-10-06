package com.manageItem.item.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InterestedItemDto {
    private int id;
    private int itemId;
    private String description;
    private double unitPrice;
    private double qty;
    private String imagePath;
    private String sellerEmail;
    private String sellerUsername;
    private String city;
    private String district;
    private String statusName;
    private double totalPrice;
}
