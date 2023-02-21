import { useState, useEffect, useCallback } from 'react';

import { NasaAPI } from "./api/nasa";
import { AstronomyPictureOfDay } from './components/AstronomyPictureOfDay/AstronomyPictureOfDay';
import { AstronomyPictureList } from './components/AstronomyPictureList/AstronomyPictureList';
import { SearchBar } from './components/SearchBar/SearchBar';
import { SearchAstronomyMedia } from './components/SearchAstronomyMedia/SearchAstronomyMedia';
import { AstronomyPictureToday } from './components/AstronomyPictureToday/AstronomyPictureToday';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Loading } from './components/Loading/Loading';

import nasaLogo from './assets/nasa.png';

import s from './style.module.css';

function lastItem(array) {
  if (array && array.length > 0) {
    let lastItem = array[array.length - 1]; return lastItem;
  } return;
}

function lastItemsArr(array) {
  if (array && array.length > 0) {
    let lastItemsArr = array.slice(-20).reverse(); return lastItemsArr;
  } return;
}

function App() {
  const [currentAstronomyPicture, setCurrentAstronomyPicture] = useState();
  const [astronomyPictureList, setAstronomyPictureList] = useState();
  const [currentSearchAstronomy, setCurrentSearchAstronomy] = useState();
  
  const [modalShow, setModalShow] = useState(false);
  const [modalSearchShow, setModalSearchShow] = useState(false);

  const fetchAPOD = useCallback(async () => {
    const astronomyPictureList = await NasaAPI.fetchAPOD();
    if (astronomyPictureList && astronomyPictureList.length > 0) {
      setCurrentAstronomyPicture(lastItem(astronomyPictureList));
      setAstronomyPictureList(lastItemsArr(astronomyPictureList));
    }
  }, [currentAstronomyPicture, astronomyPictureList]);

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

        { currentAstronomyPicture && 
          <AstronomyPictureToday astronomyPicture={ astronomyPictureList[0] } />
        }
      </div>
      <div>
        { currentAstronomyPicture && 
          <AstronomyPictureList
            astronomyPictureList={ astronomyPictureList } 
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
