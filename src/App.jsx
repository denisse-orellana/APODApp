import { useState, useEffect, useCallback } from 'react';

import { NavBar } from './components/NavBar/NavBar';
import { SearchAstronomyMedia } from './components/SearchAstronomyMedia/SearchAstronomyMedia';
import { Loading } from './components/Loading/Loading';
import { AstronomyPictureToday } from './components/AstronomyPictureToday/AstronomyPictureToday';
import { AstronomyPictureList } from './components/AstronomyPictureList/AstronomyPictureList';
import { AstronomyPictureOfDay } from './components/AstronomyPictureOfDay/AstronomyPictureOfDay';
import { Footer } from './components/Footer/Footer';

import { NasaAPI } from "./api/nasa";

import nasaLogo from './assets/nasa.png';
import s from './style.module.css';

function lastItem(array) {
  if (array && array.length > 0) {
    let lastItem = array[array.length - 1]; return lastItem;
  } 
}

function lastItemsArr(array) {
  if (array && array.length > 0) {
    let lastItemsArr = array.reverse().slice(1,25); return lastItemsArr;
  } 
}

function App() {
  const [todaysPicture, setTodaysPicture] = useState();
  const [currentAstronomyPicture, setCurrentAstronomyPicture] = useState();
  const [currentAstronomyPictureList, setCurrentAstronomyPictureList] = useState();
  const [currentSearchAstronomy, setCurrentSearchAstronomy] = useState();
  
  const [modalShow, setModalShow] = useState(false);
  const [modalSearchShow, setModalSearchShow] = useState(false);

  const fetchAPOD = useCallback(async () => {
    const astronomyPictureList = await NasaAPI.fetchAPOD();
    if (astronomyPictureList && astronomyPictureList.length > 0) {
      setTodaysPicture(lastItem(astronomyPictureList));
      setCurrentAstronomyPicture(lastItem(astronomyPictureList));
      setCurrentAstronomyPictureList(lastItemsArr(astronomyPictureList));
    }
  }, [todaysPicture, currentAstronomyPicture, currentAstronomyPictureList]);

  const fetchByQuery = useCallback(async (query) => {
    const queryResponseList = await NasaAPI.fetchByQuery(query);
    if (queryResponseList && queryResponseList.length > 0) {
      setCurrentSearchAstronomy(lastItem(queryResponseList));
      setModalSearchShow(true);
    }
  }, [currentSearchAstronomy]);

  function updateAstronomyPicture(astronomyPicture) {
    if (astronomyPicture) {
      setCurrentAstronomyPicture(astronomyPicture);
      setModalShow(true);
    }
  }

  useEffect(() => {
    fetchAPOD();
  }, []);  

  return (
    <>
      <NavBar image={ nasaLogo } onSubmitItem={ fetchByQuery } />

        { currentSearchAstronomy && 
          <SearchAstronomyMedia 
            show={ modalSearchShow }
            onHide={ () => setModalSearchShow(false) }
            searchAstronomy={ currentSearchAstronomy } 
          />  
        }

      <div>
        { currentAstronomyPicture ? '' : <Loading /> }

        { currentAstronomyPicture && <AstronomyPictureToday astronomyPicture={ todaysPicture } /> }
      </div>
      <div>
        { currentAstronomyPicture && 
          <AstronomyPictureList
            astronomyPictureList={ currentAstronomyPictureList } 
            onClickItem={ updateAstronomyPicture }
          />
        }
        { currentAstronomyPicture && 
          <AstronomyPictureOfDay 
            show={ modalShow }
            onHide={ () => setModalShow(false) }
            astronomyPicture={ currentAstronomyPicture } 
          />  
        }
      </div>
      <Footer />
    </>
  )
}

export default App;
