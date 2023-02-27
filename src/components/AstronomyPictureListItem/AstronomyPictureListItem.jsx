import s from './style.module.css';

const MAX_CHAR = 35;

export const AstronomyPictureListItem = ({ astronomyPicture, onClick }) => {

  let date = new Date(astronomyPicture.date).toUTCString().slice(0,16);

  const onClick_ = () => {
    onClick(astronomyPicture);
  }

  return (
    <div>
      <div onClick={onClick_} className={ s.container }>
        <img 
          className={ s.img }
          src={ astronomyPicture.url } 
          alt={ astronomyPicture.title } 
        />
        <div className={ s.mainTitle }>
          <h4>
            { 
              astronomyPicture.title.length > MAX_CHAR
                ? astronomyPicture.title.slice(0, MAX_CHAR) + '...'
                : astronomyPicture.title
            }
          </h4>
          <p>{ date }</p>
        </div>
      </div>
    </div>
  )
}
