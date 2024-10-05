import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { movies } from "../../utils";
// import { movies } from "../utils";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    data: movies,
  },
  reducers: {
    addTodo(state, { payload }) {
      state.data.push({
        id: v4(), // Generate unique ID
        title: payload.title,
        completed: payload.completed,
        year: payload.year,
        rating: payload.rating,
        genre: payload.genre,
        img: payload.img,
        description: payload.description,
      });
    },
    toggleTodo(state, { payload }) {
      state.data = state.data.map((value) =>
        value.id === payload.id
          ? { ...value, completed: !value.completed }
          : value
      );
    },
    removeTodo(state, { payload }) {
      state.data = state.data.filter(({ id }) => id !== payload.id);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
