import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../api/axios";

export default function BlogRead() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    api.get(`/blogs/${id}`).then(res => setBlog(res.data));
  }, [id]);

  if (!blog) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0b0f0d] text-gray-200">

      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-10">
        <Link to="/blogs" className="text-green-400 hover:underline text-sm">
          ← Back to articles
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-6">
          {blog.title}
        </h1>

        <div className="text-gray-400 text-sm mt-4">
          Published {new Date(blog.createdAt).toDateString()}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pb-32">
        <article className="prose prose-invert prose-lg max-w-none">

          {blog.content.split("\n").map((p, i) =>
            p.trim() && <p key={i}>{p}</p>
          )}

        </article>
      </div>

    </div>
  );
}
