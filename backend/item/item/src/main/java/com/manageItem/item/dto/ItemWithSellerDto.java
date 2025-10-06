package com.manageItem.item.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemWithSellerDto {
    private int itemId;
    private String description;
    private double unitPrice;
    private double qty;
    private String sellerEmail;
    private String sellerUsername; // from Seller microservice
    private String imagePath;
}
