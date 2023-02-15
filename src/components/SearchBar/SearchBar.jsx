import s from './style.module.css';

export const SearchBar = ({ onSubmit }) => {

  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
  }

  return (
    <div>
      <h2>SearchBar</h2>
      <input 
        type="text" 
        onKeyUp={ submit }
        placeholder={ "Apollo 11" }  
      />
    </div>
  )
}
