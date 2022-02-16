import { getUserList } from './getUserList';
import axios from 'axios';
import mockAxios from 'axios';

jest.mock('axios');
afterEach(jest.clearAllMocks);

describe('Describe getUserList', () => {

  it('Should reject getUserList', async() => {
    axios.get.mockImplementationOnce(() => Promise.reject(null));

    const result = await getUserList();
    
    expect(result).toStrictEqual(new Error);
  });

  it('Should resolve getUserList', async() => {
    
    axios.get
      .mockImplementationOnce(() => 
        Promise.resolve(
          { data: [
            {
              id: 1, email: 'kolya@gmail.com',
            },
          ] },
        ))
      .mockImplementationOnce(() => 
        Promise.resolve(
          { data: [
            {
              userId: 1, completed: true,
            },
            {
              userId: 1, completed: false,
            },
          ] },
        ));

    const result = await getUserList();

    expect(result).toStrictEqual([
      {
        id: 1,
        email: 'kolya@gmail.com',
        todo: [
          {
            userId: 1, completed: true,
          },
        ],
      },
    ]);

  });

  it('Should be called with proper url', async() => {
    
    axios.get.mockImplementationOnce(() => Promise.resolve({data: {}}));

    await getUserList();

    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users',
    );

    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/todos',
    );
  });
  
  
});


