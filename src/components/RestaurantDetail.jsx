import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const RestaurantDetail = () => {
  const {id}=useParams();
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantCategory, setCategoryData] = useState([]);
  
  const getRestaurantDetail = async (vendorId) => {
    const data = await fetch(
      "https://foodmandu.com/webapi/api/vendor/GetVendorDetail?VendorId=" +
        vendorId
    );
    
    const jsonData = await data.json();
    setRestaurantData(jsonData[0]);
  };

  const getRestaurantCategoryDetail = async (vendorId) => {
    const data = await fetch(
      "https://foodmandu.com/webapi/api/v2/Product/GetVendorProductsBySubCategoryV2?VendorId=" +
        vendorId
    );
    const jsonData = await data.json();
    setCategoryData(jsonData);
  };

  useEffect(() => {
    getRestaurantDetail(id);
    getRestaurantCategoryDetail(id);
  }, []);
  console.log(restaurantData,restaurantCategory)
  return (
    <div>
      RestaurantDetail
      
    </div>
  )
}

export default RestaurantDetail
