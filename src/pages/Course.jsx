import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import LecturePlayer from "../Components/training/LecturePlayer";
import LectureList from "../Components/training/LectureList";
import { useAuth } from "../auth/AuthContext";
import AddLecture from "../Components/training/AddLecture";

export default function Course() {
  const { id } = useParams();
  const { user } = useAuth();

  const [course, setCourse] = useState(null);
  const [current, setCurrent] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  const canManage = user?.role === "Admin" || user?.role === "Trainer";

  const loadCourse = () => {
    api.get(`/trainings/${id}`).then(res => {
      setCourse(res.data);
      setCurrent(res.data.lectures[0]);
    });
  }

  useEffect(() => {
    loadCourse();
  }, [id]);

  if (!course) return <div className="p-10">Loading...</div>;

  return (
    <div className="flex min-h-screen bg-linear-to-br from-lime-950 via-lime-800 to-lime-950">

      {/* Lectures */}
      <LectureList
        lectures={course.lectures}
        current={current}
        onSelect={setCurrent}
      />

      <div className="flex-1 p-8">
        {canManage && (
          <div className="flex gap-3 mb-4">
            <button onClick={() => setShowAdd(true)} className="bg-green-800 px-4 py-2 rounded-4xl">
              + New Lecture
            </button>
          </div>
        )}

        {/* Player */}
        <LecturePlayer 
          lecture={current} 
          courseId={id}
          onUpdated={loadCourse}
        />
      </div>

      {showAdd && (
        <AddLecture courseId={id} onClose={() => setShowAdd(false)} onCreated={loadCourse} />
      )}

    </div>
  );
}
