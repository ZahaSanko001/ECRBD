import React from "react";

const BlogCard = ({ blog, userRole, onDelete, onToggleHide }) => {
  return (
    <div className="bg-linear-to-br from-green-950 via-transparent border border-green-400 rounded-lg p-6 mb-6 hover:border-green-300 transition">
      {/* Blog Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-green-300 mb-2">{blog.title}</h3>
          <p className="text-sm text-gray-400">By {blog.author} • {new Date(blog.createdAt).toLocaleDateString()}</p>
        </div>
        
        {/* Admin Controls */}
        {userRole === "admin" && (
          <div className="flex gap-2">
            <button
              onClick={() => onToggleHide(blog.id)}
              className={`px-3 py-1 rounded text-sm font-semibold transition ${
                blog.isHidden
                  ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {blog.isHidden ? "Unhide" : "Hide"}
            </button>
            <button
              onClick={() => onDelete(blog.id)}
              className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm font-semibold transition"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      {/* Blog Content */}
      <p className="text-gray-300 mb-4 line-clamp-3">{blog.content}</p>

      {/* Blog Meta */}
{/*       <div className="flex gap-4 text-sm text-gray-400">
        <span>❤️ {blog.likes || 0} Likes</span>
        <span>💬 {blog.comments || 0} Comments</span>
      </div> */}

      {/* Read More Button */}
{/*       <button className="mt-4 px-4 py-2 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-slate-900 transition">
        Read More
      </button> */}
    </div>
  );
};

export default BlogCard;
