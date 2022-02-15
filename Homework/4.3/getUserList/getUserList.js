/* eslint-disable no-console */
import axios from 'axios';
import 'regenerator-runtime';

export const getUserList = async() => {
  try {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    const todos = await axios.get('https://jsonplaceholder.typicode.com/todos');

    const usersAPI = users.data;
    const todosAPI = todos.data;

    const usersWithTasks = usersAPI;

    for (const iterator of usersWithTasks) {
      iterator.todo = [];
    }



    for (const iterator of todosAPI) {

      const currentUser = usersWithTasks.find(element => element.id === iterator.userId);

      if (iterator.completed === false) {
        continue;
      }

      if (currentUser === undefined) {
        continue;
      }

      currentUser['todo'].push(iterator);
    }



    return usersWithTasks[0];

  } catch (error) {
    return null;
  }
};


(async() => {
  const a = await getUserList();

  console.log(JSON.stringify(a, null, 2));
})();
