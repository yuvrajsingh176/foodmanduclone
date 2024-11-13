import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Restaurants from "./components/Restaurants";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantLayout from "./components/RestaurantLayout";

function App() {
  return (
    <div className="">
      <Header />
      <Home />
    </div>
  );
}
  
export default App;
