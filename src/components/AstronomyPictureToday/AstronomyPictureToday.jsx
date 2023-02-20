import s from './style.module.css';

const MAX_CHAR = 300;

export const AstronomyPictureToday = ({ astronomyPicture }) => {

  return (
    <>
      <h2 className={ s.title }>Astronomy Picture Of The Day</h2>
      <div 
        className={ s.imageContainer }
        style={{
          background: astronomyPicture
            ? `url("${ astronomyPicture.url }") no-repeat center / cover
            `
            : "black",
        }}
      >
        <div className={ s.container }>
          <p className={ s.titleImage }>{ astronomyPicture.title }</p>
          <p className={ s.copyright }> 
            {
              astronomyPicture.copyright 
              ? `Image Credit & Copyright: ${ astronomyPicture.copyright }` 
              : ""
            }
          </p>
          <p>
            { 
              astronomyPicture.explanation.length > MAX_CHAR
                ? astronomyPicture.explanation.slice(0, MAX_CHAR) + '...'
                : astronomyPicture.explanation
            }
          </p>
        </div>
      </div>
    </>
  )
}
