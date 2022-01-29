import ApiClient from '../axios/apiClient';

export type User = {
  name: string;
  age: number
}

export const getUsers = async (currentPage: number): Promise<User[]> => {
  try {
    const res = await ApiClient.get('/users', {
      params: {
        limit: 10,
        offSet: currentPage
      }
    });
    return res.data;
  } catch(e) {
    console.log(e)
    return [];
  }
}
