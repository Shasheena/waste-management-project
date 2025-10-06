import React from "react";
import { addItemPickup } from "../services/apiService";

export default function PickupPdf({ item, seller, address }) {
  
  const handleSaveAndPrint = async () => {
    try {
      // 1️Add record to item_pickup table
      const response= await addItemPickup(
        item.itemIdItem.itemId, // or item.itemId if direct
        item.buyerEmail,
        item.totalQuantity,
        item.totalPrice
      );
      alert(response);
      // Then open browser print dialog
      window.print();
    } catch (error) {
      console.error("Error saving pickup:", error);
      alert("Failed to record pickup. Try again!");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Pickup Confirmation</h2>
      <p>Generated On: {new Date().toLocaleString()}</p>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <tbody>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>Buyer Email</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{item.buyerEmail}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>Item Description</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{item.itemIdItem.description}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>Unit Price</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{item.itemIdItem.unitPrice}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>Total Quantity</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{item.totalQuantity}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>Total Price</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{item.totalPrice}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>Seller Email</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{seller.seller_email}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>Seller City</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{address.city}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>Seller District</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{address.district}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>Seller Province</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{address.province}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>Other Address Info</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{address.other}</td>
          </tr>
        </tbody>
      </table>

      <p>Contact us through email for further information..</p>

      <button
        onClick={handleSaveAndPrint}
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          backgroundColor: "green",
          height: "50px",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Save as PDF
      </button>
    </div>
  );
}


