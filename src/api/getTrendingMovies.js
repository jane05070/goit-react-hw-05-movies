import { customAxios } from './customAxios';
import { toast } from 'react-toastify';

export const getTrendingMovies = async () => {
  try {
    const { data } = await customAxios.get('/trending/movie/day');
    return data;
  } catch (error) {
    toast.error(`Sorry, something went wrong ${error}`);
  }
};
