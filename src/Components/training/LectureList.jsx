export default function LectureList({ lectures, current, onSelect }) {
  return (
    <aside className="w-80 bg-green-950 p-4 overflow-y-auto">
      <h2 className="font-bold text-lg mb-4">Lectures</h2>

      {lectures.map(l => (
        <div
          key={l.id}
          onClick={() => onSelect(l)}
          className={`p-3 rounded cursor-pointer mb-2 ${
            current?.id === l.id
              ? "bg-green-600 text-black"
              : "hover:bg-slate-800"
          }`}
        >
          {l.order}. {l.title}
        </div>
      ))}
    </aside>
  );
}
