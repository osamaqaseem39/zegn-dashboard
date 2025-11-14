import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categoryApi } from "../../api/categoryApi";
import Input from "../../components/form/input/InputField";

import type { Category } from "../../api/categoryApi";

interface PaginatedResponse {
  body: {
    categories: Category[];
  };
}

interface SortConfig {
  key: keyof Category | "";
  direction: "asc" | "desc";
}

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: "", direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteConfirm, setDeleteConfirm] = useState<{show: boolean; categoryId: string; categoryName: string}>({
    show: false,
    categoryId: "",
    categoryName: ""
  });
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data = await categoryApi.getAdminCategories();
        console.log("API response data:", data);
        console.log("Data type:", typeof data);
        console.log("Is array:", Array.isArray(data));
        
        // Handle different possible response structures
        let categoriesData: Category[] = [];
        
        // If data is directly an array
        if (Array.isArray(data)) {
          categoriesData = data;
        }
        // If data has a body property with categories
        else if (data && typeof data === 'object' && (data as any).body && (data as any).body.categories && Array.isArray((data as any).body.categories)) {
          categoriesData = (data as any).body.categories;
        }
        // If data has a categories property
        else if (data && typeof data === 'object' && (data as any).categories && Array.isArray((data as any).categories)) {
          categoriesData = (data as any).categories;
        }
        // If data is not an array, log the structure and set empty array
        else {
          console.error("API returned unexpected data structure:", data);
          setError("Invalid data format received from server");
          setCategories([]);
          return;
        }
        
        setCategories(categoriesData);
      } catch (err: any) {
        console.error("Error fetching categories:", err);
        setError(err.response?.data?.message || "Failed to load categories");
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleDeleteClick = (categoryId: string, categoryName: string) => {
    setDeleteConfirm({
      show: true,
      categoryId,
      categoryName
    });
  };

  const handleDeleteConfirm = async () => {
    try {
      await categoryApi.remove(deleteConfirm.categoryId);
      setDeleteConfirm({ show: false, categoryId: "", categoryName: "" });
      setCategories(prev => 
        Array.isArray(prev) ? prev.filter(c => c._id !== deleteConfirm.categoryId) : []
      );
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to delete category");
      console.error("Error deleting category:", err);
    }
  };


  const handleSort = (key: keyof Category) => {
    setSortConfig((current) => ({
      key,
      direction: current.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const renderSortIcon = (key: keyof Category) => {
    if (sortConfig.key !== key) return "↕️";
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  // Sort the data - ensure categories is always an array
  const sortedCategories = Array.isArray(categories) ? [...categories].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  }) : [];

  // Filter the sorted data
  const filteredCategories = Array.isArray(sortedCategories) ? sortedCategories.filter(
    category => 
      category && category.name && (
        category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (category.tag && category.tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (category.description && category.description.toLowerCase().includes(searchTerm.toLowerCase()))
      )
  ) : [];

  // Calculate pagination
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = filteredCategories.slice(indexOfFirstItem, indexOfLastItem);

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 mx-1 rounded ${
            currentPage === i
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Categories</h1>
        <Link 
          to="/categories/add" 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add New Category
        </Link>
      </div>

      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search categories by name, tag, or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-64"
        />
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-md">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-4">Loading...</div>
      ) : (
        <>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th 
                    onClick={() => handleSort("name")} 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  >
                    Name {renderSortIcon("name")}
                  </th>
                  
                  <th 
                    onClick={() => handleSort("tag")} 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  >
                    Tag {renderSortIcon("tag")}
                  </th>
                  <th 
                    onClick={() => handleSort("createdAt")} 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  >
                    Created At {renderSortIcon("createdAt")}
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentCategories.length > 0 ? (
                  currentCategories.map((category) => (
                    <tr key={category._id}>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">{category.name}</td>
                      
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 rounded bg-blue-100 text-blue-800">
                          {category.tag || category.description || 'N/A'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(category.createdAt)}
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <Link 
                          to={`/categories/edit/${category._id}`} 
                          className="text-indigo-600 hover:text-indigo-900 mr-3"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDeleteClick(category._id, category.name)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                      No categories found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {filteredCategories.length > 0 && (
            <div className="mt-4 flex justify-center items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                Previous
              </button>
              
              {renderPagination()}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                Next
              </button>
              
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
            </div>
          )}
        </>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm.show && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="relative bg-white rounded-lg p-8 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p className="mb-6">
              Are you sure you want to delete the category "{deleteConfirm.categoryName}"? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setDeleteConfirm({ show: false, categoryId: "", categoryName: "" })}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 