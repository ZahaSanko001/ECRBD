export default function ResourceList({ resources }) {
  if (!resources?.length) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">
        Resources
      </h3>

      <ul className="space-y-2">
        {resources.map(r => (
          <li key={r.id}>
            <a
              href={r.fileUrl}
              target="_blank"
              className="text-green-400 hover:underline"
            >
              📄 {r.fileName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
