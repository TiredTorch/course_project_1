import { getProductList } from './getProductList';
import axios from 'axios';
import mockAxios from 'axios';

jest.mock('axios');
afterEach(jest.clearAllMocks);

describe('Describe getProductList', () => {

  it('Should reject getProductList', async() => {
    axios.get.mockImplementationOnce(() => Promise.reject(null));

    const result = await getProductList();
    
    expect(result).toStrictEqual(new Error);
  });

  it('Should resolve getProductList', async() => {
    
    axios.get.mockImplementationOnce(() => 
      Promise.resolve(
        { data: [
          {
            price: 10, category: 'w', 
          }, {
            price: 20, category: 'f', 
          }, {
            price: 5, category: 'a', 
          },
        ] },
      ));

    const result = await getProductList();

    expect(result).toStrictEqual([
      {
        price: 5, category: 'a',
      }, 
      {
        price: 20, category: 'f',
      }, {
        price: 10, category: 'w',
      },
    ]);

  });

  it('Should be called with proper url', async() => {
    
    axios.get.mockImplementationOnce(() => Promise.resolve({data: {}}));

    await getProductList();

    expect(mockAxios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products');
  });
  
  
});


