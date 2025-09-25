package com.manageItem.item.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemDto {

    private double unitPrice;
    private double qty;
    private String description;
    private int categoryId; // FK to ItemCategory
    private String sellerEmail; // Used to fetch seller email from SellerAuth service
    private int unit;
    
}
