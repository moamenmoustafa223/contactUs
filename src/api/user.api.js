import { apiClient } from "./utils";


export const getCustomerProfile = async (token) => {
    const response = await apiClient.get("/users/profile",{
        headers: {
            Authorization: `Bearer ${token}`,
          },
    });
    return response.data;
  };
  export const getCustomerFavouriteCars = async (id,token) => {
    const response = await apiClient.get(`/users/customers/${id}/favorite-cars` ,{
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
    return response.data;
  };

  export const addFavouriteCars = async (userId,carId,token) => {
    const response = await apiClient.post(`/users/customers/${userId}/favorite-cars`,
    {
        carId
    },
        {
        headers: {
            Authorization: `Bearer ${token}`, 
          }
                }
    );
    return response.data;
  };
  export const removeFavouriteCars = async (userId,carId,token) => {
    const response = await apiClient.delete(`/users/customers/${userId}/favorite-cars/${carId}`,{
        headers: {
            Authorization: `Bearer ${token}`, 
          },
    });
    return response.data;
  };