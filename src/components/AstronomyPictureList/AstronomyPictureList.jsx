import { AstronomyPictureListItem } from "../AstronomyPictureListItem/AstronomyPictureListItem";
import s from "./style.module.css";

export const AstronomyPictureList = ({ astronomyPictureList, onClickItem }) => {

  return (
    <div className="apod-list">
      <div>
        <h2 className={ s.title }>Astronomy Pictures Of The Month</h2>
      </div>
      <div className={ s.list }>
        {
          astronomyPictureList.map((astronomyPicture, index) => {
            return (
              <div key={ `${index}-${astronomyPicture.date}` }>
                <AstronomyPictureListItem astronomyPicture={ astronomyPicture } onClick={ onClickItem } />
              </div>
            )
          })          
        }
      </div>
    </div>
  )
  
}
