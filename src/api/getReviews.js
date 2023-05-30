import { customAxios } from './customAxios';
import { toast } from 'react-toastify';


export const getReviews = async id => {
  try {
    const response = await customAxios.get(`/movie/${id}/reviews`);
    return response.data;
  } catch (error) {
    toast.error('Sorry, backend error', {});
  }
};

