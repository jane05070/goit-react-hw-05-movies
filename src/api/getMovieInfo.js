import { customAxios } from './customAxios';
import { toast } from 'react-toastify';

export const getMovieInfo = async id => {
  try {
    const response = await customAxios.get(`/movie/${id}`);
    return response;
  } catch (error) {
    toast.error(`Sorry, something went wrong ${error}`);
  }
};
