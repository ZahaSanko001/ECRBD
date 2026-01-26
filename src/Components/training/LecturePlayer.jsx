import ResourceList from "./ResourceList";
import UploadResource from "./UploadResource";
import { useAuth } from "../../auth/AuthContext";

export default function LecturePlayer({ lecture, courseId, onUpdated }) {
  const { user } = useAuth();
  const canManage = user?.role === "Admin" || user?.role === "Trainer";

  if (!lecture) return null;

  return (
    <div className="flex-1 p-8">

      {/* Video */}
      <div className="aspect-video mb-6">
        <iframe
          className="w-full h-full rounded-xl"
          src={lecture.videoUrl}
          allowFullScreen
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-2">
        {lecture.title}
      </h1>

      {/* Notes */}
      <p className="text-gray-300 whitespace-pre-line mb-6">
        {lecture.note}
      </p>

      {/* Resources */}
      <ResourceList resources={lecture.resources} />

      {canManage && (
        <UploadResource
          courseId={courseId}
          lectureId={lecture.id}
          onUploaded={onUpdated}
        />
      )}
    </div>
  );
}
