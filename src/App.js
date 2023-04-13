import "./App.css";
import { Header } from "./components/header/Header.jsx";
import { MainContent } from "./components/main/MainContent.jsx";
import { useState } from "react";
import { Modal } from "./components/modal/Modal";
import { EditModal } from "./components/modal/editModal/EditModal";

function App() {
  const [modal, setModal] = useState(false);
  const [todos, setTodos] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState();

  const editModalHandler = () => {
    setEditModal((prev) => !prev);
  };

  const openModal = (event) => {
    event.preventDefault();
    setModal((prev) => !prev);
  };

  const addTodoHandler = (data) => {
    setTodos([...todos, data]);
  };

  const editMovieData = (id) => {
    todos.map((item) => {
      if (item.id === id) {
        const newData = {
          id: item.id,
          title: item.title,
          img: item.img,
          rating: item.rating,
        };
        setEditData(newData);
      }
    });
    editModalHandler();
  };

  const newTodoEdit = (data) => {
    todos.map((item) => {
      if (item.id === data.id) {
        item.id = data.id;
        item.title = data.title;
        item.img = data.img;
        item.rating = data.rating;
      }
    });
  };

  return (
    <div className="App">
      <Header onClick={openModal} />
      {modal ? (
        <Modal setModal={setModal} addTodoHandler={addTodoHandler} />
      ) : null}

      {editModal ? (
        <EditModal
          editModalHandler={editModalHandler}
          editData={editData}
          newTodoEdit={newTodoEdit}
        />
      ) : null}

      {todos.map((el) => {
        return (
          <MainContent
            key={el.id}
            img={el.img}
            rating={el.rating}
            id={el.id}
            title={el.title}
            todos={todos}
            setTodos={setTodos}
            editMovieData={editMovieData}
          />
        );
      })}
    </div>
  );
}

export default App;
