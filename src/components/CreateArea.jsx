import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {
    let [note, setNote] = useState({title: "", content:""});

    function handleChange(event){
        let {name,value} = event.target;
        setNote((x) =>{return {...x,[name]: value}; }); 
    }
  
  return (
    
    <div>
      <form className="create-note">
        <input 
        onChange={handleChange} 
        name="title" 
        placeholder="Title" 
        value={note.title} 

        />
        <textarea  
        onChange={handleChange} 
        name="content"
         placeholder="Take a note..." 
         rows="3" value ={note.content} />
        <Fab type="submit" 
        onClick={(x) =>  { 
            x.preventDefault();
            props.addNote(note); 
            setNote(
                {title: "",
                 content:""});}}>
                   <AddCircleIcon />
                 </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
