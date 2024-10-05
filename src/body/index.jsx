// import { useContext } from "react";
// import { MovieContext } from "../context/movieContext";
import { useDispatch, useSelector } from "react-redux";
// import { movies } from "../utils";
import Card from "./card";
import { Button } from "antd";
import { useRef } from "react";
import { addTodo } from "../redux/slices/todoSlice";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import TopMovies from "../pages/movies/top-movies";

const Body = () => {
  const ref = useRef();
  // const [movies] = useContext(MovieContext);
  const { data } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const should_upload = () => {
    const newTitle = ref.current.value;

    if (newTitle.trim() !== "") {
      dispatch(
        addTodo({
          title: newTitle,
          completed: false,
          id: v4(),
          year: 2023,
          rating: 10,
          genre: "Comedy",
          img: "https://i.redd.it/3dujg6pyvih81.jpg",
          description:
            "This is the best comedy movie ever that might cause your death by make you laugh so damn hard", // Default description
        })
      );

      ref.current.value = "";
    }
  };

  return (
    <div>
      <div className="w-[300px] h-fit border flex flex-col gap-[5px] m-auto my-[50px]">
        Wanna watch Top Movies
        <Link to="/movies/top-movies">Click</Link>
      </div>
      <div className="w-[300px] h-fit border flex flex-col gap-[5px] m-auto my-[50px]">
        <input type="text" ref={ref} />
        <Button onClick={should_upload}>Add</Button>
      </div>
      {data.map((value) => (
        <Card key={value.id} {...value} />
      ))}
    </div>
  );
};

export default Body;
