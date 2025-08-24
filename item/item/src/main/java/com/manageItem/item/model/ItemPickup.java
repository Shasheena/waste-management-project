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
public class ItemPickup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pickup_id")
    public int pickupId;

    @Column(name = "total_quantity")
    public double totalQty;

    @Column(name = "total_price")
    public double totalPrice;

    @ManyToOne
    @JoinColumn(name = "Item_item_id")
    private Item itemIdItem;

    @Column(name = "buyer_email")
    public String buyerEmail;

    public int getPickupId() {
        return pickupId;
    }

    public void setPickupId(int pickupId) {
        this.pickupId = pickupId;
    }

    public double getTotalQty() {
        return totalQty;
    }

    public void setTotalQty(double totalQty) {
        this.totalQty = totalQty;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
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
