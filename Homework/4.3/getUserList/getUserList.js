import axios from 'axios';
import 'regenerator-runtime';
import {} from 'dotenv/config';

export const getUserList = async() => {
  try {
    const users = await axios.get(process.env.USERS_URL);
    const todos = await axios.get(process.env.TODOS_URL);

    const usersAPI = users.data;
    const todosAPI = todos.data;

    const usersWithTasks = usersAPI
      .map(user => ( {
        ...user, todo: (
          todosAPI.filter(task => (user.id === task.userId && task.completed))
        ),
      }));

    return usersWithTasks;

  } catch (error) {
    
    return new Error;
  }
};
