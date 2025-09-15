import axiosInstance from './axiosConfig';

export interface Category {
  _id: string;
  address?: string; // Optional address field for toggle active functionality
  name: string;
  tag?: string; // Make tag optional since server might return description instead
  description?: string; // Keep description for backward compatibility
  icon: string;
  isActive?: boolean; // Optional since it might not be in the server response
  sortOrder?: number; // Optional since it might not be in the server response
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateCategoryRequest {
  name: string;
  tag?: string;
  icon?: string;
}

export interface UpdateCategoryRequest extends Partial<CreateCategoryRequest> {}

export const categoryApi = {
  // Public endpoints
  list: async (): Promise<Category[]> => {
    const response = await axiosInstance.get('/category');
    return response.data;
  },

  getById: async (id: string): Promise<Category> => {
    const response = await axiosInstance.get(`/category/${id}`);
    return response.data;
  },

  // Get all categories (alias for list)
  getCategories: async (): Promise<Category[]> => {
    const response = await axiosInstance.get('/category');
    return response.data;
  },

  // Admin endpoints
  // Create a new category
  create: async (payload: CreateCategoryRequest): Promise<Category> => {
    const response = await axiosInstance.post('/admin/category/create', payload);
    return response.data;
  },

  // Update category by ID
  update: async (id: string, payload: UpdateCategoryRequest): Promise<Category> => {
    const response = await axiosInstance.put(`/admin/category/update/${id}`, payload);
    return response.data;
  },

  // Toggle category active status by address
  toggleActive: async (address: string): Promise<Category> => {
    const response = await axiosInstance.put(`/admin/category/active/${address}`);
    return response.data;
  },

  // Get all categories (admin)
  getAdminCategories: async (): Promise<Category[]> => {
    const response = await axiosInstance.get('/admin/category');
    console.log('categoryApi: getAdminCategories response:', response.data);
    
    // Handle different response structures
    if (response.data.body && Array.isArray(response.data.body)) {
      return response.data.body;
    } else if (response.data.body && response.data.body.categories && Array.isArray(response.data.body.categories)) {
      return response.data.body.categories;
    } else if (Array.isArray(response.data)) {
      return response.data;
    } else if (response.data.categories && Array.isArray(response.data.categories)) {
      return response.data.categories;
    } else {
      console.error('categoryApi: Unexpected response structure:', response.data);
      return [];
    }
  },

  // Get category by ID (admin)
  getAdminCategoryById: async (id: string): Promise<Category> => {
    const response = await axiosInstance.get(`/admin/category/${id}`);
    return response.data;
  },

  // Delete category by ID (admin)
  remove: async (id: string): Promise<void> => {
    await axiosInstance.delete(`/admin/category/${id}`);
  },
};

