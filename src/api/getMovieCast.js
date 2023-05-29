import { customAxios } from './customAxios';
import { toast } from 'react-toastify';

export const getMovieCast = async id => {
  try {
    const response = await customAxios.get(`/movie/${id}/credits`);
    return response;
  } catch (error) {
    toast.error(`Sorry, something went wrong ${error}`);
  }
};
