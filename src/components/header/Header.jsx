import React from "react";
import "./Header.css";

export const Header = ({ onClick }) => {
  return (
    <div className="div">
      <header className="header">
        <h1 className="h1">Favorite Movies</h1>
        <button onClick={onClick} className="button">
          ADD MOVIE
        </button>
      </header>
    </div>
  );
};
