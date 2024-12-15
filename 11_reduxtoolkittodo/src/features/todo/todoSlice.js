import { createSlice, nanoid } from "@reduxjs/toolkit";

//for generating unique id => nanoid

const initialState = {
  todos: [
    {
      id: 1,
      text: "hello",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  //inside reducres properties and functions
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    // remember it when we use {} in an arrow function the function body requires an explicit return.
    //Callback without {} in Arrow Functions: it implicitly or by default  returns the expression

    //but we can also write as without return
    //= todos.filter((todo) => todo.id !== action.payload )
    //Both styles are correct, but the choice depends on readability and team conventions.

    //Using {} with return can sometimes make the code more explicit and easier to understand, especially for new developers.

    //The second style (without {}) is concise and preferred when the logic is simple, as in your example.
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((val) => {
        return val.id !== action.payload;
      });
    },
    //not used these two yet
    updateTodo: (state, action) => {
      state.todos = state.todos.map((val) => {
        return val.id === action.payload;
      });
    },
    daleteTodo: () => {},
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
