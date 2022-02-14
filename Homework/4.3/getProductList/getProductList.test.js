/* eslint-disable no-console */
import { getProductList } from './getProductList';
import 'regenerator-runtime';

describe('Describe getProductList', () => {
  it('gpl', async() => {
    const result = await getProductList();

    expect(result).toBe(10);
  });
  
  
});


