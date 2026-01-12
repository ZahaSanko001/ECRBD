import React, { useState } from "react";

const BlogForm = ({ onSubmit, userRole }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim()) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      setFormData({ title: "", content: "" });
    } catch (error) {
      console.error("Error submitting blog:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" border border-black rounded-lg p-6 mb-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Create a New Blog Post</h2>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-green-300 hover:text-green-200 transition text-xl"
        >
          {isCollapsed ? "▼" : "▲"}
        </button>
      </div>
      
      {!isCollapsed && (
        <>
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        {/* Title Input */}
        <div>
          <label className="block text-gray-300 font-semibold mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            className="w-full px-4 py-2 border border-green-400 rounded text-white placeholder-gray-500 focus:outline-none focus:border-green-300"
            maxLength={200}
          />
          <p className="text-xs text-gray-400 mt-1">{formData.title.length}/200</p>
        </div>

        {/* Content Input */}
        <div>
          <label className="block text-gray-300 font-semibold mb-2">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your blog content here..."
            className="w-full px-4 py-2 bg-slate-700 border border-green-400 rounded text-white placeholder-gray-500 focus:outline-none focus:border-green-300 h-48 resize-none"
            maxLength={5000}
          />
          <p className="text-xs text-gray-400 mt-1">{formData.content.length}/5000</p>
        </div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-500 text-white font-semibold rounded transition"
          >
            {isSubmitting ? "Publishing..." : "Publish Blog"}
          </button>
          <button
            type="reset"
            className="px-6 py-2 border border-gray-400 text-gray-400 hover:bg-gray-700 font-semibold rounded transition"
            onClick={() => setFormData({ title: "", content: "" })}
          >
            Clear
          </button>
        </div>
      </form>
        </>
      )}
    </div>
  );
};

export default BlogForm;
