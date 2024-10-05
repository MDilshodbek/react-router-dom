import { Button, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../../redux/slices/todoSlice";
// import React, { useContext } from "react";
// import { MovieContext } from "../../../context/movieContext";

const Card_Footer = ({ id, completed }) => {
  // const [movies, setMovies] = useContext(MovieContext);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTodo({ id }));
  };
  return (
    <div>
      <div className="flex justify-between py-[10px] px-[10px]">
        <h1>Already watched? </h1>
        <Checkbox
          checked={completed}
          onClick={() => dispatch(toggleTodo({ id }))}
        />
      </div>
      <div className="flex justify-center gap-4 py-[10px] px-[10px]">
        <Button>Edit</Button>
        <Button danger type="primary" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Card_Footer;
