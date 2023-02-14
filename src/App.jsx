import { useState, useEffect, useCallback } from 'react';

import { NasaAPI } from "./api/nasa";
import { AstronomyPictureOfDay } from './components/AstronomyPictureOfDay/AstronomyPictureOfDay';
import { AstronomyPictureList } from './components/AstronomyPictureList/AstronomyPictureList';

import reactLogo from './assets/react.svg';
import s from './style.module.css';

function todaysPicture(array) {
  if (array && array.length > 0) {
    let todaysPicture = array[array.length - 1]; return todaysPicture;
  } return;
}

function lastPicturesArr(array) {
  if (array && array.length > 0) {
    let lastPicturesArr = array.slice(-20).reverse(); return lastPicturesArr;
  } return;
}

function App() {
  const [currentAstronomyPicture, setCurrentAstronomyPicture] = useState();
  const [astronomyPictureList, setAstronomyPictureList] = useState();

  const fetchAPOD = useCallback(async () => {
    const astronomyPictureList = await NasaAPI.fetchAPOD();
    if (astronomyPictureList && astronomyPictureList.length > 0) {
      setCurrentAstronomyPicture(todaysPicture(astronomyPictureList));
      setAstronomyPictureList(lastPicturesArr(astronomyPictureList));
    }
  }, [currentAstronomyPicture, astronomyPictureList]);

  function updateAstronomyPicture(astronomyPicture) {
    setCurrentAstronomyPicture(astronomyPicture);
  }

  useEffect(() => {
    fetchAPOD();
  }, []);  

  return (
    <>
      <div>
        <h1>NASA API</h1>
        { currentAstronomyPicture && <AstronomyPictureOfDay astronomyPicture={ currentAstronomyPicture } />  }
      </div>
      <div>
        { currentAstronomyPicture && 
          <AstronomyPictureList
            astronomyPictureList={ astronomyPictureList } 
            onClickItem={ updateAstronomyPicture }
          />
        }
      </div>
    </>
  )
}

export default App;
