import { getUsersWithPostsAndComments } from './getUsersWithPostsAndComments';
import axios from 'axios';
import mockAxios from 'axios';

jest.mock('axios');
afterEach(jest.clearAllMocks);

describe('Describe getUsersWithPostsAndComments', () => {

  it('Should reject getUsersWithPostsAndComments', async() => {
    axios.get.mockImplementationOnce(() => Promise.reject(null));

    const result = await getUsersWithPostsAndComments();
    
    expect(result).toStrictEqual(new Error);
  });

  it('Should resolve getUsersWithPostsAndComments', async() => {
    
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
              userId: 1, id: 1,
            },
          ] },
        ))
      .mockImplementationOnce(() => 
        Promise.resolve(
          { data: [
            {
              postId: 1, name: 'Mary',
            },
          ] },
        ));

    const result = await getUsersWithPostsAndComments();

    expect(result).toStrictEqual([
      {
        id: 1,
        email: 'kolya@gmail.com',
        posts: [
          {
            userId: 1, id: 1, comments: [
              {
                postId: 1, name: 'Mary',
              },
            ],
          },
        ],
      },
    ]);

  });

  it('Should be called with proper url', async() => {
    
    axios.get.mockImplementationOnce(() => Promise.resolve({data: {}}));

    await getUsersWithPostsAndComments();

    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users',
    );

    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts',
    );

    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/comments',
    );
  });
  
});


