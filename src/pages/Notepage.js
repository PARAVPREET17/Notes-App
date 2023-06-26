import React, { useEffect, useState } from "react";
// import notes from "../assets/data";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
const Notepage = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();
  // const note = notes.find(p => p._id === noteId);
  let [note, setNote] = useState(null);
 

  useEffect(() => {
    
    let getNote = async () => {
    if(noteId==='new')return
    let response = await fetch(`/api/notes/${noteId}/`);
    let data = await response.json();
    setNote(data);
  };
    getNote()
  }, [noteId]);


  let createNote = async () => {
    await fetch(`/api/notes/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...note, 'updated': new Date() }),
    });
  };
  
  let updateNote = async () => {
    await fetch(`/api/notes/${noteId}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      // The spread operator is a JavaScript concept. It basically allows you to copy over all the data from an JavaScript object (dictionary in python) to another object
      body: JSON.stringify({ ...note, 'updated': new Date() }),
    });
  };

  let deleteNote = async () => {
    await fetch(`/api/notes/${noteId}/`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
         });
    navigate("/");
  };

  let handleSubmit = async () => {
    if(noteId !== 'new' && !note.body)
    {
      deleteNote()
    }else if(noteId !== 'new'){
        updateNote()
    }else if(noteId === 'new' && note !== null){
      createNote()
  }
 
    navigate("/");
  };

  let handleChange=(value)=>{
    setNote(note=>({ ...note, 'body': value }));
  }

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft onClick={handleSubmit} />
          </Link>
        </h3>
        {noteId !== 'new'? (
         <button onClick={deleteNote}>Delete</button>
        ):(
          <button onClick={handleSubmit}>Done</button>
        )
        }
       
      </div>
      <textarea
        onChange={(e) => {
          handleChange(e.target.value)
        }} placeholder="Edit note"
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default Notepage;
