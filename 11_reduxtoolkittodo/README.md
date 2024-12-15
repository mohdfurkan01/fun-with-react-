### Redux setup

redux is different from react-redux
redux core library h
react-redux uska core implementation h wiring karne k liye jisske redux aur react-redux can communicate with each other

/
redux tool kafi kaam ko automatic kar deta h

# step1:

install thses two npm packages
npm install @reduxjs/toolkit
npm install react-redux

# step2:

sabse pahle "store" bnate hain har ek application ka ek hi store hota h (we can say single source of truth)

create a folder named as app inside src
Inside app crate a file store.js

app.js

# step1: configure store from core redux not react-redux

like-> import { configureStore } from "@reduxjs/toolkit";
then export it as inside a varibale like this
export const store = configureStore({
reducer: todoReducer,
//others
});

# step 3

naming convention is todoSlice or superManSlice etc
ab slice k liye ek method diya h createSlcie
import { createSlice } from "@reduxjs/toolkit";

ab slice bnane k liye 3 chize :
name, initialState, aur reducers ki list

const initialState = {
todos: [{ id: 1, text: "hello", },],
};
initailState me by default array data structur diya h
export const todoSlice = createSlice({
name: "todo",
initialState,
reducers: {
addTodo: (state, action) => {//logic}
updateTodo: (state, action) => {or we can write in a seprate file},
daleteTodo: (state, action) => {yha par import kr lenge},
}
})

ab do chize hain state=> iske andar updated value in the store milti h aur action=> action.payload aur bhi chize milti hain

fir useDispatch value bhejne k liye aur useSelector values lene k liye
