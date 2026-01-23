import ResourceList from "./ResourceList";

export default function LecturePlayer({ lecture }) {
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
    </div>
  );
}
