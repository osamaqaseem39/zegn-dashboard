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
  list: async (): Promise<Category[]> => {
    const response = await axiosInstance.get('/category');
    return response.data;
  },

  getById: async (id: string): Promise<Category> => {
    const response = await axiosInstance.get(`/category/${id}`);
    return response.data;
  },

  create: async (payload: CreateCategoryRequest): Promise<Category> => {
    const response = await axiosInstance.post('/category', payload);
    return response.data;
  },

  update: async (id: string, payload: UpdateCategoryRequest): Promise<Category> => {
    const response = await axiosInstance.patch(`/category/${id}`, payload);
    return response.data;
  },

  remove: async (id: string): Promise<void> => {
    await axiosInstance.delete(`/category/${id}`);
  },
};

