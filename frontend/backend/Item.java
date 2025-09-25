package com.manageItem.item.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "item")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    public int itemId;

    @Column(name = "unit_price")
    public double unitPrice;

    @Column(name = "quantity")
    public double qty;

    @Column(name = "description")
    public String description;
    
    @ManyToOne
    @JoinColumn(name = "item_category_category_id")
    private ItemCategory categoryId;

    @ManyToOne
    @JoinColumn(name = "units_unit_id")
    private Units unit;

    @Column(name = "seller_email", nullable = false)
    public String sellerEmail;

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }

    public double getQty() {
        return qty;
    }

    public void setQty(double qty) {
        this.qty = qty;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ItemCategory getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(ItemCategory categoryId) {
        this.categoryId = categoryId;
    }

    public String getSellerEmail() {
        return sellerEmail;
    }

    public void setSellerEmail(String sellerEmail) {
        this.sellerEmail = sellerEmail;
    }

    public Units getUnit() {
        return unit;
    }

    public void setUnit(Units unit) {
        this.unit = unit;
    }
    
    
}
