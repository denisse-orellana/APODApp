import s from './style.module.css';

const MAX_EXPLANATION_CHAR = 400;

export const AstronomyPictureListItem = ({ astronomyPicture, onClick }) => {

  const onClick_ = () => {
    onClick(astronomyPicture);
  }

  return (
    <div onClick={onClick_}>
      <h2>AstronomyPictureListItem</h2>
      <img 
        src={ astronomyPicture.url } 
        alt={ astronomyPicture.title } 
      />
      <p>{ astronomyPicture.title }</p>
      <p>{ astronomyPicture.date }</p>
      <p> 
        {
          astronomyPicture.copyright 
          ? `Image Credit & Copyright: ${astronomyPicture.copyright }` 
          : ""
        }
      </p>
      <p>
        { 
          astronomyPicture.explanation.length > MAX_EXPLANATION_CHAR 
            ? astronomyPicture.explanation.slice(0, MAX_EXPLANATION_CHAR) + '...'
            : astronomyPicture.explanation
        }
      </p>
    </div>
  )
}
