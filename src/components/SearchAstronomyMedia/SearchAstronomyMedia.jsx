import axios from "axios";
import { useState, useEffect, useCallback } from 'react';

import { NasaAPI } from "../../api/nasa";

import s from './style.module.css';



export const SearchAstronomyMedia = ({ searchAstronomy }) => {

  const [currentAstronomyVideo, setCurrentAstronomyVideo] = useState();

  const fetchCollectionVideo = useCallback(async (url) => {
    const collectionVideos = await NasaAPI.fetchCollectionVideo(url);
    if (collectionVideos && collectionVideos.length > 0) {
      setCurrentAstronomyVideo(collectionVideos[0]);
    }
  }, [currentAstronomyVideo]);

  useEffect(() => {
    if (searchAstronomy) {
      fetchCollectionVideo(searchAstronomy.href)
    }
  }, [searchAstronomy])
  

  return (
    <div>
      <h2>SearchAstronomy</h2>
      <img 
        src={ searchAstronomy.links[0].href } 
        alt={ searchAstronomy.data[0].title } 
      />
      <p>
        <video 
          width="320" 
          height="240" 
          controls 
          src={ currentAstronomyVideo }>
            Your browser does not support the video tag.
        </video>
      </p>
      <p>{ searchAstronomy.data[0].date_created }</p>
      <p>{ searchAstronomy.data[0].title }</p>
      <p>{ searchAstronomy.data[0].description }</p>
      <p>Keywords: { searchAstronomy.data[0].keywords }</p>
    </div>
  )
}
