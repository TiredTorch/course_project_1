import axios from 'axios';
import 'regenerator-runtime';
import {} from 'dotenv/config';

export const getProductList = async() => {

  try {
    const result = await axios.get(process.env.STORE_URL);
    const storeAPI = result.data;
    
    storeAPI
      .sort((a, b) => a.price > b.price ? 1 : -1)
      .sort((a, b) => a.category > b.category ? 1 : -1);

    return storeAPI;

  } catch (error) {

    return new Error;
  }

};


