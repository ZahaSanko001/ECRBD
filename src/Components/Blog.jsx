import React, { useState } from "react";
import BlogForm from "./BlogForm";
import BlogCard from "./BlogCard";
import BlogBg from "../Assets/blog-bg2.jpg";

const Blog = ({ userRole = "member" }) => {
  // ======================== CHANGE #1: MOCK DATA ========================
  // TODO: Replace this useState with useEffect that fetches blogs from backend
  // Example: useEffect(() => { fetchBlogs from API }, [])
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Getting Started with Fitness Training",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "John Trainer",
      createdAt: new Date("2024-01-10"),
      likes: 24,
      comments: 5,
      isHidden: false,
    },
    {
      id: 2,
      title: "Nutrition Tips for Better Performance",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Jane Member",
      createdAt: new Date("2024-01-08"),
      likes: 15,
      comments: 3,
      isHidden: false,
    },
  ]);
  // ====================================================================

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // ======================== CHANGE #2: CREATE BLOG ========================
  // TODO: Replace this with POST request to your backend API
  // Example: POST /api/blogs with formData
  const handleBlogSubmit = (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newBlog = {
          id: blogs.length + 1,
          ...formData,
          author: userRole === "admin" ? "Admin User" : "You",
          createdAt: new Date(),
          likes: 0,
          comments: 0,
          isHidden: false,
        };
        setBlogs((prev) => [newBlog, ...prev]);
        resolve();
      }, 500);
    });
  };
  // ====================================================================

  // ======================== CHANGE #3: DELETE BLOG ========================
  // TODO: Replace this with DELETE request to your backend API
  // Example: DELETE /api/blogs/{id}
  const handleDeleteBlog = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      setBlogs((prev) => prev.filter((blog) => blog.id !== id));
    }
  };
  // =====================================================================

  // ======================== CHANGE #4: TOGGLE HIDE ========================
  // TODO: Replace this with PUT/PATCH request to your backend API
  // Example: PATCH /api/blogs/{id} with { isHidden: newStatus }
  const handleToggleHide = (id) => {
    setBlogs((prev) =>
      prev.map((blog) =>
        blog.id === id ? { ...blog, isHidden: !blog.isHidden } : blog
      )
    );
  };
  // =====================================================================

  // Filter blogs
  const filteredBlogs = blogs
    .filter((blog) => {
      if (filter === "hidden") return blog.isHidden;
      if (filter === "visible") return !blog.isHidden;
      return true;
    })
    .filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div id="blogs" className="min-h-screen mx-6 rounded-4xl py-20" style={{backgroundImage: `url(${BlogBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-300 mb-4">
            Community Blog
          </h1>
          <p className="text-white text-lg md:text-xl">
            Share your journey, tips, and experiences with our community
          </p>
        </div>

        {/* Blog Form - Only show for members and admins */}
        {(userRole === "member" || userRole === "admin") && (
            <BlogForm onSubmit={handleBlogSubmit} userRole={userRole} />
        )}

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div>
            <input
              type="text"
              placeholder="Search blogs by title, content, or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-green-400 rounded text-white placeholder-gray-500 focus:outline-none focus:border-green-300"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded font-semibold transition ${
                filter === "all"
                  ? "bg-green-500 text-slate-900"
                  : "bg-slate-800 text-green-300 border border-green-400 hover:bg-slate-700"
              }`}
            >
              All Blogs ({blogs.length})
            </button>
            {userRole === "admin" && (
              <>
                <button
                  onClick={() => setFilter("visible")}
                  className={`px-4 py-2 rounded font-semibold transition ${
                    filter === "visible"
                      ? "bg-green-500 text-slate-900"
                      : "bg-slate-800 text-green-300 border border-green-400 hover:bg-slate-700"
                  }`}
                >
                  Visible ({blogs.filter((b) => !b.isHidden).length})
                </button>
                <button
                  onClick={() => setFilter("hidden")}
                  className={`px-4 py-2 rounded font-semibold transition ${
                    filter === "hidden"
                      ? "bg-green-500 text-slate-900"
                      : "bg-slate-800 text-green-300 border border-green-400 hover:bg-slate-700"
                  }`}
                >
                  Hidden ({blogs.filter((b) => b.isHidden).length})
                </button>
              </>
            )}
          </div>
        </div>

        {/* Blogs List */}
        <div className="max-h-[600px] overflow-y-auto space-y-6 pr-4">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                userRole={userRole}
                onDelete={handleDeleteBlog}
                onToggleHide={handleToggleHide}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No blogs found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
