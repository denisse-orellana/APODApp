import { useState } from 'react';

import Button from 'react-bootstrap/Button';

import s from './style.module.css';

export const SearchBar = ({ onSubmit }) => {

  const [currentInput, setCurrentInput] = useState();

  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    } 
  }

  function handleChange(e) {
    if (e.target.value.trim() !== "") {
      setCurrentInput(e.target.value);
    }
  }

  function handleClick() {
    if (currentInput) {
      onSubmit(currentInput);
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <input 
          type="text" 
          onKeyUp={ submit }
          onChange={ handleChange }
          placeholder={ "Apollo 11" }  
          className={ s.form }
        />

        <Button 
          type="submit"
          className={ s.search } 
          variant="outline-success"
          onClick={ handleClick }
        >
          Search
        </Button>
      </div>
    </>
  )
}
