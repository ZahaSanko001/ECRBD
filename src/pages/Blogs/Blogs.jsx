import { useEffect, useState } from "react";
import api from "../../api/axios";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.get("/blogs").then(res => setBlogs(res.data));
  }, []);

  return (
    <div className="min-h-screen px-10 py-16 max-w-6xl mx-auto">
      <Link to={`/`}><h1 className="text-4xl font-bold mb-12">ECRBD</h1></Link>

      <div className="grid md:grid-cols-1 gap-10">
        {blogs.map(b => (
          <Link to={`/blogs/${b.id}`} key={b.id}>
            <article className="group">
              <div className="h-50 bg-slate-800 rounded-xl mb-4 overflow-hidden">
                {/* optional cover */}
              </div>

              <h2 className="text-xl font-semibold group-hover:text-green-400">
                {b.title}
              </h2>

              <p className="text-gray-400 mt-2 line-clamp-3">
                {b.content.slice(0, 140)}...
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
