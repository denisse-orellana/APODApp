import s from './style.module.css';

export const Footer = () => {
  return (
    <div className={ s.container }>
      <h4>Thanks to Nasa for all the quality content available at <a href="https://api.nasa.gov/">NASA Open API.</a></h4> 
    </div>
  )
}
