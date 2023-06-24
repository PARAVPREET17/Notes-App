import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  // Props are immutable when pass down from parent to child(parameters)

  return (
    <Link to={`/note/${note.id}`}>
      <div>
        <h3>{note.body}</h3>
      </div>
    </Link>
  );
};

export default ListItem;
