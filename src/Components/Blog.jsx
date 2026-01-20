import { useEffect, useState } from "react";
import BlogForm from "./BlogForm";
import BlogCard from "./BlogCard";
import BlogBg from "../Assets/blog-bg3.jpg";
import api from "../api/axios";
import { useAuth } from "../auth/AuthContext";

const Blog = () => {
  const { user } = useAuth();

  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // 🔹 Load blogs
  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      const res = await api.get("/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error("Failed to load blogs", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Create blog
  const handleBlogSubmit = async (formData) => {
    try {
      const res = await api.post("/blogs", formData);

      // re-fetch OR optimistically add
      await loadBlogs();

      return res.data;
    } catch (err) {
      console.error("Failed to create blog", err);
      throw err;
    }
  };

  // 🔹 Delete blog
  const handleDeleteBlog = async (id) => {
    if (!window.confirm("Delete this blog?")) return;

    try {
      await api.delete(`/blogs/${id}`);
      setBlogs(prev => prev.filter(b => b.id !== id));
    } catch (err) {
      console.error("Failed to delete blog", err);
    }
  };

  // 🔹 Search blogs (server-side)
  useEffect(() => {
    const delay = setTimeout(async () => {
      try {
        if (!searchTerm.trim()) {
          loadBlogs();
        } else {
          const res = await api.get(`/blogs/search?q=${searchTerm}`);
          setBlogs(res.data);
        }
      } catch (err) {
        console.error("Search failed", err);
      }
    }, 400);

    return () => clearTimeout(delay);
  }, [searchTerm]);

  if (loading) return <div className="text-white">Loading blogs...</div>;

  return (
    <div
      id="blogs"
      className="min-h-screen mx-6 rounded-4xl mt-20 pt-20 border-green-200 border-r-2 border-l-2"
      style={{
        backgroundImage: `url(${BlogBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl text-green-300 font-bold mb-4">
            Community Blogs
          </h1>
          <p className="text-green-300 text-lg">
            Share your journey with the community
          </p>
        </div>

        {/* Create */}
        {user && <BlogForm onSubmit={handleBlogSubmit} />}

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-green-400 rounded text-green-300 placeholder-green-200"
          />
        </div>

        {/* List */}
        <div className="max-h-150 overflow-y-auto space-y-6 pr-4">
          {blogs.length > 0 ? (
            blogs.map(blog => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onDelete={handleDeleteBlog}
              />
            ))
          ) : (
            <p className="text-center text-gray-400">No blogs found</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Blog;
