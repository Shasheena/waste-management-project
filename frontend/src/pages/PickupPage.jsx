import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PickupPdf from "./PickupPdf";
import axios from "axios";

export default function PickupPage() {
  const { id } = useParams(); // <-- get id from URL
  const interestedItemId = id;

  const [itemData, setItemData] = useState(null);
  const [sellerData, setSellerData] = useState(null);
  const [addressData, setAddressData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemRes = await axios.get(`http://localhost:8082/api/interests/item`, {
          params: { id: interestedItemId },
        });
        setItemData(itemRes.data);
        console.log("Seller email:", itemRes.data.itemIdItem.sellerEmail);

        const sellerRes = await axios.get(`http://localhost:8080/api/sellers/by-email`, {
          params: { email: itemRes.data.itemIdItem.sellerEmail },
        });
        setSellerData(sellerRes.data);

        const addressRes = await axios.get(`http://localhost:8080/api/address/by-id`, {
          params: { id: sellerRes.data.address_id },
        });
        setAddressData(addressRes.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [interestedItemId]);

  if (!itemData || !sellerData || !addressData) return <p>Loading...</p>;

  return <PickupPdf item={itemData} seller={sellerData} address={addressData} />;
}
