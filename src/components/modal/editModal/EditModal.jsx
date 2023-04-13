import React, { useState } from "react";
// import "./Modal.css";

import styled from "styled-components";

export const EditModal = ({ editModalHandler, editData, newTodoEdit }) => {
  const [title, setTitle] = useState(editData.title);
  const [img, setImg] = useState(editData.img);
  const [rating, setRating] = useState(editData.rating);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChang = (e) => {
    setImg(e.target.value);
  };

  const handleChan = (e) => {
    setRating(e.target.value);
  };

  const das = (e) => {
    e.preventDefault();
    const data = {
      id: editData.id,
      title: title,
      img: img,
      rating: rating,
    };
    newTodoEdit(data);

    editModalHandler();
  };

  return (
    <>
      <ModalDiv>
        <form action="">
          <label htmlFor="nameInput">Имя:</label>

          <input
            type="text"
            id="nameInput"
            onChange={handleChange}
            value={title}
          />
          <label htmlFor="urlInput">Ссылка</label>
          <input type="url" id="urlInput" value={img} onChange={handleChang} />
          <label htmlFor="numberInput">Рейтинг</label>
          <input
            type="number"
            id="numberInput"
            value={rating}
            onChange={handleChan}
          />
          <div>
            <button onClick={editModalHandler}>Cancel</button>
            <button onClick={das}>ADD</button>
          </div>
        </form>
      </ModalDiv>
    </>
  );
};

const ModalDiv = styled.div`
  top: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #48383829;
  text-align: start;
  gap: 50px;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    gap: 10px;
    width: 400px;
    height: 300px;
    background-color: #c0c0c058;
    label {
      font-weight: 700;
      color: red;
      text-align: start;
    }
    input {
      width: 300px;
      height: 30px;
      border-radius: 20px;
      border: 1px solid green;

      box-shadow: 1px 1px green;
    }
    button {
      width: 100px;
      height: 30px;
      text-shadow: 1px 2px 2px silver;
      margin-left: 20px;
    }
  }
`;
