import React from 'react'
import { useParams } from 'react-router-dom'

const RestaurantDetail = () => {
  const {id}=useParams();
  console.log(id)
  return (
    <div>
      RestaurantDetail
      
    </div>
  )
}

export default RestaurantDetail
