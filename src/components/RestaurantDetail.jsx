import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//ShortName Cuisine Address1 VendorCoverImageName MinimumOrderAmount ServiceCharge VAT VendorLogoImageName
const RestaurantDetail = () => {
  // "https://foodmandu.com/webapi/api/vendor/GetVendorDetail?VendorId=" +
  // "https://foodmandu.com/webapi/api/v2/Product/GetVendorProductsBySubCategoryV2?VendorId=" +
  const [vendorData, setVendorData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const vendorUrlId = useParams();
  const { id } = vendorUrlId;

  const getVendorDetail = async (id) => {
    try {
      const data = await fetch(
        "https://foodmandu.com/webapi/api/vendor/GetVendorDetail?VendorId=" + id
      );
      const jsonData = await data.json();
      setVendorData(jsonData);
    } catch (e) {
      console.log(e);
    }
  };

  const getCategoryData = async (id) => {
    try {
      const data = await fetch(
        "https://foodmandu.com/webapi/api/v2/Product/GetVendorProductsBySubCategoryV2?VendorId=" +
          id
      );
      const jsonData = await data.json();
      setCategoryData(jsonData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getVendorDetail(id);
    getCategoryData(id);
  }, []);
  console.log(vendorData[0]);
  return <div></div>;
};

export default RestaurantDetail;
