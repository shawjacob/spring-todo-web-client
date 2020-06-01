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



export const postTodo = async (todo: Todo) => {
    try{
        let response = await axios.post(base_url, todo);
        console.log("Response", response);
        console.log("Data", response.data);
        return response.data;
    }
    catch (error) {
        return error;
    }
}

export const updateTodoById = async (todo: Todo) => {
    try {
        let response = await axios.post('$base_url/${todo.id', todo);
        console.log("Response", response);
        console.log("Data", response.data);
        return response.data;
    } catch (error) {
        return error;
    }


}
export const deleteTodoById = (id: number) => {
}
