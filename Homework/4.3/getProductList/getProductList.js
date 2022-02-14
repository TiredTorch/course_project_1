/* eslint-disable no-console */
import axios from 'axios';
import 'regenerator-runtime';

export const getProductList = async() => {

  try {
    const result = await axios.get('https://fakestoreapi.com/products');

    const storeAPI = result.data;

    for (let i = 0; i < storeAPI.length; i++) {


      for (let j = 0; j < storeAPI.length - i - 1; j++) {
        if (storeAPI[j].category > storeAPI[j + 1].category) {
          const tempBubble = storeAPI[j];

          storeAPI[j] = storeAPI[j + 1];
          storeAPI[j + 1] = tempBubble;
        }
        
      }
      
    }

    for (let i = 0; i < storeAPI.length; i++) {


      for (let j = 0; j < storeAPI.length - i - 1; j++) {
        if (storeAPI[j] > storeAPI[j + 1]) {
          const tempBubble = storeAPI[j];

          storeAPI[j] = storeAPI[j + 1];
          storeAPI[j + 1] = tempBubble;
        }
        
      }
      
    }

    return storeAPI;

  } catch (error) {

    return null;
  }

};

(async() => {
  console.log(await getProductList());
})();

