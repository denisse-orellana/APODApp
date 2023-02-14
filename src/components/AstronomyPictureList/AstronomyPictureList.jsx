import { AstronomyPictureListItem } from "../AstronomyPictureListItem/AstronomyPictureListItem";
import s from "./style.module.css";

export const AstronomyPictureList = ({ astronomyPictureList, onClickItem }) => {

  return (
    <div>
        <h2>AstronomyPictureList</h2>
        {
          astronomyPictureList.map((astronomyPicture, index) => {
            return (
              <div key={ `${index}-${astronomyPicture.date}` }>
                <AstronomyPictureListItem astronomyPicture={ astronomyPicture } onClick={onClickItem } />
              </div>
            )
          })          
        }
    </div>
  )
  
}
