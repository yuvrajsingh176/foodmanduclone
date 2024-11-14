import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const fetchRestaurants = async () => {
    const data = await fetch(
      `https://foodmandu.com/webapi/api/Vendor/GetVendors1?Cuisine=&DeliveryZoneId=1&IsFavorite=false&IsRecent=false&Keyword=${query}&LocationLat=27.7026754&LocationLng=85.3191018&PageNo=1&PageSize=12&SortBy=4&VendorName=&VendorTags=%7B%22FEATURED%22:true%7D&search_by=restaurant`
    );
    const json = await data.json();
    setRestaurants(json);
  };
  console.log(restaurants);
  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="flex justify-center items-center flex-wrap gap-8 my-8">
      {restaurants.map((data) => (
        <Card propData={data} key={data.Id} />
      ))}
    </div>
  );
};

export default Restaurants;
