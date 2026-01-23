import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import LecturePlayer from "../components/training/LecturePlayer";
import LectureList from "../components/training/LectureList";

export default function Course() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    api.get(`/trainings/${id}`).then(res => {
      setCourse(res.data);
      setCurrent(res.data.lectures[0]);
    });
  }, [id]);

  if (!course) return <div className="p-10">Loading...</div>;

  return (
    <div className="flex min-h-screen">

      {/* Lectures */}
      <LectureList
        lectures={course.lectures}
        current={current}
        onSelect={setCurrent}
      />

      {/* Player */}
      <LecturePlayer lecture={current} />

    </div>
  );
}
