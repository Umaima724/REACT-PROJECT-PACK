import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import Weather from "./components/WeatherApp/weather";
import FoodRecipeApp from "./components/food-recipe/FoodRecipeApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/accordion" element={<Accordian />} />
      <Route path="/random-color" element={<RandomColor />} />
      <Route path="/star-rating" element={<StarRating />} />
      <Route
        path="/image-slider"
        element={
          <ImageSlider
            url="https://picsum.photos/v2/list"
            page={1}
            limit={5}
          />
        }
      />
      <Route path="/load-more" element={<LoadMoreData />} />
      <Route path="/qr-code" element={<QRCodeGenerator />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/food/*" element={<FoodRecipeApp />} />
    </Routes>
  );
}

export default App;