// import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import "./MainContent.css";

export const MainContent = ({
  title,
  img,
  id,
  rating,
  todos,
  editMovieData,
  setTodos,
}) => {
  const Delete = (id) => {
    const filter = todos.filter((item) => item.id !== id);
    setTodos(filter);
  };

  return (
    <div className="divMainContent">
      <img className="contentImg" src={img} alt="surot" />
      <div className="childDiv">
      <h3 style={{ marginTop: "20px" }} className="contentH1">
        {title}
      </h3>
        <p className="contentP"> {rating} / 5 stars</p>
        <button className="buttonDELETE" onClick={() => Delete(id)}>
          DELETE
        </button>
        <button className="buttonEDIT" onClick={() => editMovieData(id)}>
          EDIT
        </button>
      </div>
    </div>
  );
};
