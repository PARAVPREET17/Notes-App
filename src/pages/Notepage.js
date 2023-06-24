import React from "react";
import notes from "../assets/data";
import { useParams } from "react-router-dom";

const Notepage = () => {

  const {noteId} = useParams();
  const note = notes.find(p => p._id === noteId);
  return (
    <div>
      <p>{note.body} {noteId}</p>
    </div>
  )
}

export default Notepage;
