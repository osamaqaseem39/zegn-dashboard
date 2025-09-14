import axiosInstance from './axiosConfig';

export interface Category {
  _id: string;
  name: string;
  description: string;
  icon: string;
  isActive: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCategoryRequest {
  name: string;
  description: string;
  icon?: string;
  isActive?: boolean;
  sortOrder?: number;
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

  // Toggle category active status by ID
  toggleActive: async (id: string): Promise<Category> => {
    const response = await axiosInstance.put(`/admin/category/active/${id}`);
    return response.data;
  },

  // Get all categories (admin)
  getAdminCategories: async (): Promise<Category[]> => {
    const response = await axiosInstance.get('/admin/category');
    return response.data;
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

