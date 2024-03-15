import { apiClient, convertQueryToQueryString } from "./utils";

/**
 * Represents a category object.
 *
 * @typedef {Object} Category
 * @property {number} id - The unique identifier for the category.
 * @property {string} name - The name of the car category.
 * @property {string} icon - The URL of the category's icon.
 */

/**
 * Represents a type object.
 *
 * @typedef {Object} CarType
 * @property {number} id - The unique identifier for the car type.
 * @property {string} name - The name of the car type.
 * @property {string} icon - The URL of the type's icon.
 *
 */

/**
 * Represents a brand object.
 *
 * @typedef {Object} Model
 * @property {number} id - The unique identifier for the brand.
 * @property {string} name - The name of the car brand.
 * @property {number} doors - The URL of the car's model doors number.
 * @property {number} passengers - The URL of the car's model passengers number.
 * @property {string} transmission - The URL of the car's model transmission type.
 * @property {Brand} brand - Information about the car model's brand.
 * @property {Category} category - Information about the car category.
 * @property {CarType} type - Information about the car type.
 */

/**
 * Represents a color object.
 *
 * @typedef {Object} Color
 * @property {number} id - The unique identifier for the car color.
 * @property {string} name - The name of the car color.
 *
 */

/**
 * Represents a car object.
 *
 * @typedef {Object} Car
 * @property {number} id - The unique identifier for the car.
 * @property {number} year - The manufacturing year of the car.
 * @property {string|null} description - A description of the car (null if not available).
 * @property {string[]} pictures - An array of picture URLs for the car.
 * @property {number} deposit - The deposit amount required for renting the car.
 * @property {boolean} hasInsurance - Indicates whether the car has insurance coverage.
 * @property {number} minDays - The minimum number of rental days required.
 * @property {boolean} isHidden - Indicates whether the car is hidden from public view.
 * @property {number} costPerDayNow - The cost per day for renting the car at the current rate.
 * @property {number} costPerWeekNow - The cost per week for renting the car at the current rate.
 * @property {number} costPerMonthNow - The cost per month for renting the car at the current rate.
 * @property {number} costPerDayBefore - The cost per day for renting the car at the previous rate.
 * @property {number} costPerWeekBefore - The cost per week for renting the car at the previous rate.
 * @property {number} costPerMonthBefore - The cost per month for renting the car at the previous rate.
 * @property {Model} model - Information about the car model.
 * @property {Color} color - Information about the car color.
 *
 */

/**
 * Retrieves a list of car brands.
 *
 * @returns {Promise<Brand[]>} - A promise that resolves to an array of car brands data.
 */
export const listBrands = async () => {
  const response = await apiClient.get("/brands");
  return response.data;
};

/**
 * Retrieves a list of car brands.
 *
 * @returns {Promise<Category[]>} - A promise that resolves to an array of car category data.
 */
export const listCategories = async () => {
  const response = await apiClient.get("/categories");
  return response.data;
};

/**
 * Represents a brand object.
 *
 * @typedef {Object} Brand
 * @property {number} id - The unique identifier for the brand.
 * @property {string} name - The name of the car brand.
 * @property {string} logo - The URL of the brand's logo.
 */

/**
 * Retrieves a list of car brands.
 *
 * @returns {Promise<CarType[]>} - A promise that resolves to an array of car types data.
 */
export const listCarTypes = async () => {
  const response = await apiClient.get("/types");
  return response.data;
};

/**
 * Retrieves a list of car brands.
 *
 * @returns {Promise<Model[]>} - A promise that resolves to an array of car model data.
 */
export const listModels = async () => {
  const response = await apiClient.get("/models");
  return response.data;
};

/**
 * Retrieves a list of car colors.
 *
 * @returns {Promise<Color[]>} - A promise that resolves to an array of car color data.
 */
export const listColors = async () => {
  const response = await apiClient.get("/colors");
  return response.data;
};

/**
 * Retrieves a list of cars based on the provided query parameters.
 *
 * @param {Object} queryString - An object representing the query parameters.
 * @param {string} queryObj.search - The search keyword for car names or descriptions.
 * @param {string} queryObj.brand - The brand of cars to filter by.
 * @param {string} queryObj.category - The category of cars to filter by.
 * @param {string} queryObj.vendor - The vendor of cars to filter by.
 * @param {string} queryObj.sort - The sorting criteria for the list of cars.
 * @returns {Promise<Car[]>} - A promise that resolves to an array of car data.
 */

export const listCars = async (queryString) => {
  // convert query to query string
  const response = await apiClient.get(`/cars/accepted?${queryString}&pageSize=8`);
  return response.data;
};

/**
 * Retrieves a list of cars based on the provided query parameters.
 *
 * @param {string | number} id - The sorting criteria for the list of cars.
 * @returns {Promise<Car>} - A promise that resolves to an array of car data.
 */
export const getCar = async (id) => {
  const response = await apiClient.get(`/cars/${id}`);
  return response.data;
};



export const listSections = async () => {
  const response = await apiClient.get("/sections/active");
  return response.data;
};

export const getSectionCar = async (id) => {
  const response = await apiClient.get(`/sections/${id}/cars/`);
  return response.data;
};
export const listFeaturedCars = async () => {
  const response = await apiClient.get("/cars/featured");
  return response.data;
};
export const getSimilarCars = async (id) => {
  const response = await apiClient.get(`/cars/${id}/related`);
  return response.data;
};
export const listAds = async () => {
  const response = await apiClient.get("/ads/active");
  return response.data;
};