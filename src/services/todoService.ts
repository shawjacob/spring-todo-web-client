import axios from 'axios';
import Todo from "./Todo"


const base_url = 'https://js224488-todo-spring.herokuapp.com/api/todos';

export const getTodos = async () =>{
    try{
        let response = await axios.get(base_url);
        console.log("Response", response);
        console.log("Date", response.data);
        return response.data;
    }catch(error){
        return error;
    }
};

export const getTodoById = (id: number) =>{

}

export const postTodo = (todo: Todo) => {

}

export const updateTodoById = (todo: Todo) => {

}

export const deleteTodoById = (id: number)  => {

}