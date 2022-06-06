import { useState, useEffect } from "react"
import axios from 'axios';

export default function Gallery({ }) {
  const [data, setData] = useState({
    gallery: []
  })

  setData({
    gallery: {
      images: [
        'https://media.elliotf.dev/2022/06/03/DSC00413.jpg',
        'https://media.elliotf.dev/2022/06/03/DSC00372.jpg',
        'https://media.elliotf.dev/2022/06/03/DSC00435.jpg',
        'https://media.elliotf.dev/2022/06/03/DSC00408.jpg',
        'https://media.elliotf.dev/2022/06/03/DSC00437.jpg',
        'https://media.elliotf.dev/2022/06/03/DSC00507.jpg',
        'https://media.elliotf.dev/2022/06/03/DSC00502.jpg',
        'https://media.elliotf.dev/2022/06/03/DSC00485.jpg',
        'https://media.elliotf.dev/2022/06/03/DSC00492.jpg',
        'https://media.elliotf.dev/2022/06/03/DSC00489.jpg',
        'https://media.elliotf.dev/2022/06/03/DSC00510.jpg',
        'https://media.elliotf.dev/2022/06/03/DSC00569.jpg'
      ]
    }
  })

  return (
    <div>
      <h2 className="text-xl font-extrabold mb-8">My Super Awesome Gallery</h2>
      <div className="grid grid-cols-4">
        <div>
          {data.gallery?.images?.map((image) => (
            <img key={image} src={image} alt={image} />
          )).filter(function (value, index, ar) {
            return (index % 4 == 0);
          })}
        </div>
        <div>
          {data.gallery?.images?.map((image) => (
            <img key={image} src={image} alt={image} />
          )).filter(function (value, index, ar) {
            return (index % 4 == 1);
          })}
        </div>
        <div>
          {data.gallery?.images?.map((image) => (
            <img key={image} src={image} alt={image} />
          )).filter(function (value, index, ar) {
            return (index % 4 == 2);
          })}
        </div>
        <div>
          {data.gallery?.images?.map((image) => (
            <img key={image} src={image} alt={image} />
          )).filter(function (value, index, ar) {
            return (index % 4 == 3);
          })}
        </div>
      </div>
    </div>
  )
}