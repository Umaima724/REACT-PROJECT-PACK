import { useState } from 'react'
import './App.css'
import Accordian from './components/accordian'
import RandomColor from "./components/random-color";
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import Weather from './components/WeatherApp/weather';
function App() {
  

  return (
    <>
      <div className="App">
        {/*Accordian Component*/}
        <Accordian/>
        <RandomColor/>
        <StarRating/>
        <ImageSlider
        url="https://picsum.photos/v2/list"
        page={1}
        limit={5}
      />
      <LoadMoreData/>
      <QRCodeGenerator/>
      <Weather/>
      </div>
    </>
  )
}

export default App
