/* eslint-disable no-console */
import { getProductList } from './getProductList';
import mockAxios from 'axios';

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn().mockResolvedValue({ data: 'aaa' }),
  },
}));

describe('Describe getProductList', () => {

  afterEach(jest.clearAllMocks);

  it('gpl1', async() => {
    
    const result = await getProductList();

    expect(result).toBe('aaa');
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products');
  });
  
  
});


