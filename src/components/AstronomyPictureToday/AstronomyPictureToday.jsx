import { useState } from 'react';

import s from './style.module.css';

const MAX_CHAR = 150;

export const AstronomyPictureToday = ({ astronomyPicture }) => {

  const [showMore, setshowMore] = useState(false);

  return (
    <>
      <div 
        className={ s.imageContainer }
        style={{
          background: astronomyPicture
            ? `url("${ astronomyPicture.url }") no-repeat center / cover
            `
            : "black",
        }}
      >

        <span onClick={ () => setshowMore(!showMore) }>
          <div className={ s.container }>
            <p className={ s.titleImage }>{ astronomyPicture.title }</p>
            <p className={ s.copyright }> 
              {
                astronomyPicture.copyright 
                ? `Image Credit & Copyright: ${ astronomyPicture.copyright }` 
                : ""
              }
            </p>
            <p className={ s.explanation }>
              {
                showMore ? astronomyPicture.explanation : astronomyPicture.explanation.slice(0, MAX_CHAR) + '...'
              }
              &emsp;
              <span className={ s.copyright }> 
                { showMore ? "Show less" : "Know more" }
              </span>
            </p>
          </div>
        </span>

      </div>
    </>
  )
}
