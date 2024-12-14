import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./context";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  console.log("+++++++++++Main State value", todos);
  //we add the new value with old values with callback fun having prev parameter (prev, val or anything just var name)
  //Date.now() basis on the date every will get new id
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  // prev array mapped with every id and prevTodo is individual id and id is for update if true then add newTodo else prevTodo as it is.
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
    1;
  };

  // prev.map((eachVal)=>{
  //   if(eachVal === id){
  //  #todo
  //   }else{
  //     prevTodo
  //   }
  // })

  //filter returns a new array that only includes items that satisfy the condition
  //If val.id does not match the id you want to delete, keep the todo in the new list.
  //If val.id matches the id, remove the todo from the list.
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((val) => val.id !== id));
  };

  //just overwrite the completed property to it's negation with this ! if(prevTodo === id) {prevTodo and and negation} else{prevTodo}
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  //for getting items
  //-todos is just a name can be anything you want
  useEffect(() => {
    //localStorage.getItem("todos");
    const todos = JSON.parse(localStorage.getItem("todos"));
    //console.log("-----localStorage GET>>>>>>>>>>>>>>>>--------", todos);
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  //for setting items
  useEffect(() => {
    //we can store it in a varivable
    //const setTodo =
    localStorage.setItem("todos", JSON.stringify(todos));
    //console.log("++++++++++++++++SET Localstorage", setTodo);
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here '()'->auto return and '{}'-> must return */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
