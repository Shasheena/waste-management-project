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
@Table(name = "interested_item_list")
public class InterestedItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    public int categoryId;

    @ManyToOne
    @JoinColumn(name = "Item_item_id")
    private Item itemIdItem;

    @Column(name = "buyer_email")
    public String buyerEmail;

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public Item getItemIdItem() {
        return itemIdItem;
    }

    public void setItemIdItem(Item itemIdItem) {
        this.itemIdItem = itemIdItem;
    }

    public String getBuyerEmail() {
        return buyerEmail;
    }

    public void setBuyerEmail(String buyerEmail) {
        this.buyerEmail = buyerEmail;
    }

    
}
