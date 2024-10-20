import * as webService from './webServiceUtil';
import { Todo } from '@/entity/todo';

export const registerUser = async (username: string, password: string): Promise<void> => {
    await webService.registerUser(username, password);
};

export const loginUser = async (username: string, password: string): Promise<void> => {
    await webService.loginUser(username, password);
};

export const loadTodos = async (): Promise<Todo[]> => {
    return await webService.loadTodos();
};

export const createTodo = async (task: string): Promise<Todo> => {
    return await webService.createTodo(task);
};

export const editTodo = async (id: number, task: string, completed: boolean): Promise<Todo> => {
    return await webService.editTodo(id, task, completed);
};

export const deleteTodo = async (id: number): Promise<void> => {
    await webService.deleteTodo(id);
};
