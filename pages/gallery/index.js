import { useState, useEffect } from "react"
import axios from 'axios';

export default function Gallery({ }) {
  const [data, setData] = useState({
    gallery: []
  })

  useEffect(() => {
    axios.get("/api/gallery")
      .then(resp => {
        let gallery = resp?.data;
        setData({
          gallery
        });
      })
  }, [])

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