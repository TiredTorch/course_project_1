import axios from 'axios';
import 'regenerator-runtime';

export const getDataFromServer = async(url) => {
  try {

    return await (await axios.get(url)).data;
  } catch (error) {

    return new Error;
  }
};