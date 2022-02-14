/* eslint-disable no-console */
import axios from 'axios';

export const getUserList = async() => {
  try {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    const todos = await axios.get('https://jsonplaceholder.typicode.com/todos');

    const usersAPI = users.data;
    const todosAPI = todos.data;

    const usersWithTasks = usersAPI;

    for (const iterator of usersWithTasks) {
      iterator.todos = [];
    }

    for (const iterator of todosAPI) {
      
      if (iterator.completed === false) {
        continue;
      }

      delete iterator.completed;
      usersWithTasks.find(element => element.id === iterator.userId)['todos'].push(iterator);
    }

    return usersWithTasks;

  } catch (error) {
    return null;
  }
};

getUserList().then(console.log);