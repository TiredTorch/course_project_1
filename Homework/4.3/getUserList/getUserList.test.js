/* eslint-disable no-console */
import { getUserList } from './getUserList';
import mockAxios from 'axios';

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn().mockResolvedValue({ data: 'fff' }),
  },
}));

describe('Describe getUserList', () => {

  afterEach(jest.clearAllMocks);

  it('gpl2', async() => {
    
    const result = await getUserList();

    expect(result).toBe('fff');
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
  });
  
  
});


