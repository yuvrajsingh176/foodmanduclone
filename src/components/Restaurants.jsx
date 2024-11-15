import React, { useEffect, useState } from "react";
import Card from "./Card";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const data = await fetch(
      "https://foodmandu.com/webapi/api/Vendor/GetVendors1?Cuisine=&DeliveryZoneId=1&IsFavorite=false&IsRecent=false&Keyword=&LocationLat=27.7026754&LocationLng=85.3191018&PageNo=1&PageSize=12&SortBy=4&VendorName=&VendorTags=%7B%22FEATURED%22:true%7D&search_by=restaurant"
    );
    const jsonData = await data.json();
    setRestaurants(jsonData);
  };
  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div>
      <div className="p-8 bg-slate-100">
        <p className="text-4xl">Restaurants and stores</p>
      </div>

      <div className="flex justify-center items-center gap-8 flex-wrap mx-8 py-8">
        {restaurants.map((data) => (
          <Card propData={data} key={data.Id} />
        ))}
      </div>



    </div>
  );
};

export default Restaurants;
