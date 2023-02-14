import { useState, useEffect, useCallback } from 'react';

import { NasaAPI } from "./api/nasa";
import { AstronomyPictureOfDay } from './components/AstronomyPictureOfDay/AstronomyPictureOfDay';
import { AstronomyPictureList } from './components/AstronomyPictureList/AstronomyPictureList';

import reactLogo from './assets/react.svg';
import s from './style.module.css';

function App() {
  const [currentAstronomyPicture, setCurrentAstronomyPicture] = useState();
  const [astronomicPictureList, setAstronomicPictureList] = useState();

  const fetchAPOD = useCallback(async () => {
    const astronomyPictureList = await NasaAPI.fetchAPOD();
    if (astronomyPictureList && astronomyPictureList.length > 0) {
      setCurrentAstronomyPicture(astronomyPictureList[0]);
      setAstronomicPictureList(astronomyPictureList.slice(0, 20));
    }
  }, [currentAstronomyPicture, astronomicPictureList]);

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
            astronomyPictureList={ astronomicPictureList } 
            onClickItem={ updateAstronomyPicture }
          />
        }
      </div>
    </>
  )
}

export default App;
