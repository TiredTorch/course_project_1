/* eslint-disable no-console */
import { getUsersWithPostsAndComments } from './getUsersWithPostsAndComments';
import mockAxios from 'axios';

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn().mockResolvedValue({ data: 'kkk' }),
  },
}));

describe('Describe getUsersWithPostsAndComments', () => {

  afterEach(jest.clearAllMocks);

  it('gpl3', async() => {
    
    const result = await getUsersWithPostsAndComments();

    expect(result).toBe('kkk');
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products');
  });
  
  
});


