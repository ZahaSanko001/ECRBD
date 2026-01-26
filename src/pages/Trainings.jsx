import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import CreateCourse from "../Components/training/CreateCourse";
import Navbar from "../Components/Navbar";

export default function Trainings() {
    const [courses, setCourses] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const { user } = useAuth();
    
    const canManage = user?.role === "Admin" || user?.role === "Trainer";
    const loadCourses = () => {
        api.get("/trainings").then(res => setCourses(res.data));
    }

    useEffect(() => {
        loadCourses();
    }, []);

    return (
        <div className="min-h-screen px-10 py-16 bg-linear-to-br from-lime-950 via-lime-800 to-lime-950">
            <Navbar/>
            <div className="flex justify-between items-center mb-10 mt-20">
                <h1 className="text-3xl font-bold">Training Programs</h1>

                {canManage && (
                <button
                    onClick={() => setShowCreate(true)}
                    className="bg-green-800 px-4 py-2 rounded"
                >
                    + New Course
                </button>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {courses.map(c => (
                <Link key={c.id} to={`/trainings/${c.id}`}>
                    <div className="bg-lime-950 rounded-xl overflow-hidden hover:scale-[1.02] transition">
                    <img
                        src={c.thumbnailUrl}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                        <h2 className="text-xl font-semibold">{c.title}</h2>
                        <p className="text-gray-300 text-sm mt-2">
                        {c.description}
                        </p>
                    </div>
                    </div>
                </Link>
                ))}
            </div>

            {showCreate && (
                <CreateCourse
                onClose={() => setShowCreate(false)}
                onCreated={loadCourses}
                />
            )}
        </div>
    );
}