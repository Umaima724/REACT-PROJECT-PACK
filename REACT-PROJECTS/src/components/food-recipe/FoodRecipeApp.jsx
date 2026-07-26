import Navbar from "./component/navbar";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Details from "./pages/details";
import { Routes, Route } from "react-router-dom";

export default function FoodRecipeApp() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="recipe-item/:id" element={<Details />} />
      </Routes>
    </>
  );
}