import React, { useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    let [notes, addNotes] = useState([]);

    function addEntry(note){
        addNotes(x =>{return [...x, note];
            note.preventDefault();
        });
    }
    function Delete (id){
        addNotes( x => {
            return x.filter((item, index) =>{
                return index !== id;
            });
        });

    }

  return (
    <div>
      <Header />
      <CreateArea  addNote={addEntry} />
     {notes.map((item, index) => (<Note key={index} id={index} title={item.title} content={item.content} onDelete={Delete} />))}
      <Footer />
    </div>
  );
}

export default App;
