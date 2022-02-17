import { getDataFromServer } from '~/utils/helper';
import {} from 'dotenv/config';

export const getProductList = async() => {

  try {
    const storeAPI = await getDataFromServer(process.env.STORE_URL);
    
    storeAPI
      .sort((a, b) => a.price > b.price ? 1 : -1)
      .sort((a, b) => a.category.localeCompare(b.category));

    return storeAPI;

  } catch (error) {

    return new Error;
  }

};


