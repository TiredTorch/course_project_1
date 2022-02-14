/* eslint-disable no-console */
import { getProductList } from './getProductList';
import mockAxios from 'axios';

jest.mock('axios');
mockAxios.get.mockImplementation(() => Promise.resolve({ data: {}}));

describe('Describe getProductList', () => {
  test('Should return list of products', async() => {
    const result = await getProductList();

    console.log(result);
    expect(result).toStrictEqual([]);
  });
  
});


