import Button from 'react-bootstrap/Button';

import s from './style.module.css';

export const SearchBar = ({ onSubmit }) => {

  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
  }

  return (
    <>
      <div className="d-flex">
        <input 
          type="text" 
          onKeyUp={ submit }
          placeholder={ "Apollo 11" }  
          className={ s.form }
        />

        <Button className={ s.search } variant="outline-success">Search</Button>
      </div>
    </>
  )
}
