import { useState, useEffect, useCallback } from 'react';

import { NasaAPI } from "./api/nasa";

import reactLogo from './assets/react.svg';
import s from './style.module.css';

function App() {
  const [currentAstronomyPicture, setCurrentAstronomyPicture] = useState();

  const fetchAPOD = useCallback(async () => {
    const astronomyPictureList = await NasaAPI.fetchAPOD();
    if (astronomyPictureList && astronomyPictureList.length > 0) {
      setCurrentAstronomyPicture(astronomyPictureList[0]);
    }
  }, [currentAstronomyPicture])

  useEffect(() => {
    fetchAPOD();
  }, []);

  console.log(currentAstronomyPicture)

  return (
    <div>
      <h1>title</h1>
    </div>
  )
}

export default App;
