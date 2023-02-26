import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import s from './style.module.css';

export const AstronomyPictureOfDay = ( props ) => {

  const { astronomyPicture, ...rest } = props;

  let date = new Date(astronomyPicture.date);

  return (
    <Modal
      {...rest}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 className={ s.title }>{ astronomyPicture.title }</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='p-0'>
        <img 
          src={ astronomyPicture.url }  
          alt={ astronomyPicture.title } 
          className={ s.img }
        />
        <div className='pt-5 px-5 pb-3'>
          <p className={ s.date }>{ date.toLocaleString('en-US', { dateStyle: 'long' }) }</p>
          <p className={ s.copyright }> 
            {
              astronomyPicture.copyright 
              ? `Image Credit & Copyright: ${ astronomyPicture.copyright }` 
              : ""
            }
          </p>
          <p className={ s.explanation }>
            { astronomyPicture.explanation }
          </p>
        </div>

        <div className='pb-5 px-5 text-center'>
          <Button className={ s.close } onClick={props.onHide}>Close</Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}
