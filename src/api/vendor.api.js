import { apiClient } from "./utils";

/**
 * Represents a vendor object.
 *
 * @typedef {Object} Vendor
 * @property {number} id - The unique identifier for the vendor.
 * @property {string} email - The email of the vendor.
 * @property {string} createdAt - The date of the vendor creation.
 * @property {string} description - The description of the vendor.
 * @property {string} logo - The URL of the vendor's logo.
 * @property {string} address - The address of the vendor.
 * @property {string} addressLink - The URL of the vendor's address.
 * @property {string} contactEmail - The email of the vendor's contact.
 * @property {string[]} telephoneNumbers - The telephone numbers of the vendor.
 * @property {string[]} whatsappNumbers - The whatsapp numbers of the vendor.
 */
/**
 * Return a list of all vendors.
 *
 * @returns {Promise<Vendor[]>} A promise to the list of vendors.
 */
export const listVendors = async () => {
  const response = await apiClient.get("/users/vendors");
  return response.data;
};


/**
 * Return a list of all vendors.
 *
 * @returns {Promise<Vendor>} A promise to the vendor.
 */
export const getVendor = async () => {
    const response = await apiClient.get(`/users/vendors/${id}`);
    return response.data;
  };

// export { Vendor };
