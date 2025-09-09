import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categoryApi } from "../../api/categoryApi";
import Input from "../../components/form/input/InputField";

interface CategoryFormData {
  name: string;
  description: string;
  icon: string;
  isActive: boolean;
  sortOrder: number;
}

export default function CategoryForm() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const isEditMode = Boolean(categoryId);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<CategoryFormData>({
    name: "",
    description: "",
    icon: "",
    isActive: true,
    sortOrder: 0,
  });

  const fetchCategoryDetails = useCallback(async () => {
    try {
      const categoryData = await categoryApi.getById(categoryId as string);
      setFormData({
        name: categoryData.name,
        description: categoryData.description,
        icon: categoryData.icon,
        isActive: categoryData.isActive,
        sortOrder: categoryData.sortOrder,
      });
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch category details");
      console.error("Error fetching category:", err);
    }
  }, [categoryId]);

  useEffect(() => {
    if (isEditMode) {
      fetchCategoryDetails();
    }
  }, [isEditMode, fetchCategoryDetails]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'isActive' ? (e.target as HTMLInputElement).checked : name === 'sortOrder' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isEditMode) {
        await categoryApi.update(categoryId as string, formData);
      } else {
        await categoryApi.create(formData);
      }
      navigate("/categories");
    } catch (err: any) {
      setError(err.response?.data?.message || `Failed to ${isEditMode ? 'update' : 'create'} category`);
      console.error(`Error ${isEditMode ? 'updating' : 'creating'} category:`, err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{isEditMode ? 'Edit Category' : 'Create New Category'}</h1>
          <button
            onClick={() => navigate("/categories")}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded-lg p-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter category name"
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <Input
              id="description"
              name="description"
              type="text"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter category description"
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="isActive" className="block text-sm font-medium text-gray-700 mb-1">
                Active
              </label>
              <input
                id="isActive"
                name="isActive"
                type="checkbox"
                checked={formData.isActive}
                onChange={handleChange}
                className="h-4 w-4"
              />
            </div>
            <div>
              <label htmlFor="sortOrder" className="block text-sm font-medium text-gray-700 mb-1">
                Sort Order
              </label>
              <Input
                id="sortOrder"
                name="sortOrder"
                type="number"
                value={formData.sortOrder}
                onChange={handleChange}
                placeholder="0"
                className="w-full"
              />
            </div>
          </div>

          <div>
            <label htmlFor="icon" className="block text-sm font-medium text-gray-700 mb-1">
              Icon *
            </label>
            <Input
              id="icon"
              name="icon"
              type="text"
              value={formData.icon}
              onChange={handleChange}
              placeholder="Enter icon name or URL"
              className="w-full"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? (isEditMode ? 'Updating...' : 'Creating...') : (isEditMode ? 'Update Category' : 'Create Category')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 