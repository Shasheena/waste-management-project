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
    @Column(name = "idinterested_item_id")
    public int idinterestedItemId;

    @ManyToOne
    @JoinColumn(name = "Item_item_id")
    private Item itemIdItem;

    @Column(name = "buyer_email")
    public String buyerEmail;

    @Column(name = "total_price")
    public double totalPrice;

    @Column(name = "total_quantity")
    public double totalQuantity;

    

    public int getIdinterestedItemId() {
        return idinterestedItemId;
    }

    public void setIdinterestedItemId(int idinterestedItemId) {
        this.idinterestedItemId = idinterestedItemId;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public double getTotalQuantity() {
        return totalQuantity;
    }

    public void setTotalQuantity(double totalQuantity) {
        this.totalQuantity = totalQuantity;
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
