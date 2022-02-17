import { getDataFromServer } from '~/utils/helper';
import {} from 'dotenv/config';

export const getUserList = async() => {
  try {
    const users = getDataFromServer(process.env.USERS_URL);
    const todos = getDataFromServer(process.env.TODOS_URL);

    const responseFromServer = await Promise.all([users, todos]);

    const usersAPI = responseFromServer[0];
    const todosAPI = responseFromServer[1];

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
