
import { useEffect, useState } from "react";
import axios from "axios";

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const StockGraphics = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    axios.get<Photo[]>('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(res => setPhotos(res.data))
  }, [])

  return (
    <>
    <ul>
      {photos.map(photo => <li key={photo.id}><img className="placeholder-img" src={photo.url}/></li>)}
    </ul>
    </>
  );
};

export default StockGraphics;
