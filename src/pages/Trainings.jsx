import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";

export default function Trainings() {
    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        api.get("/trainings").then(res => setCourses(res.data));
    }, []);

    return (
        <div className="h-screen px-10 py-16">
            <h1 className="text-4xl font-bold mb-10">Training Programs</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {courses.map(c => (
                    <Link key={c.id} to={`/trainings/${c.id}`}>
                        <div className="rounded-4xl overflow-hidden hover:scale-[1.02] transition">
                            <img src="c.thumbnailUrl" alt="" className="w-full h-48 object-cover"/>
                            <div className="p-5">
                                <h2 className="text-2xl font-semibold">{c.title}</h2>
                                <p className="text-gray-400 text-sm mt-2">
                                    {c.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    );
}