import EventImageCard from "./EventImageCard";
import EventBg from "../Assets/eventSide1.jpg";

const eventImages = [
  "5.jpg",
  "2.jpg",
  "6.jpg",
  "4.jpg"
];

const Event = () => {
  return (
    <section id="events" className="h-screen px-6 mt-20 pb-20">
      <div className="grid md:grid-cols-2 gap-5 h-full">

        {/* 🔹 Flashing image card */}
        <div className="rounded-4xl border-2 border-emerald-500">
          <EventImageCard images={eventImages} interval={2500} />
        </div>

        {/* 🔹 Events list card */}
        <div className="rounded-4xl border-2 border-emerald-500 p-6" style={{ backgroundImage: `url(${EventBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <h3 className="text-3xl font-bold mb-10">Upcoming Events</h3>

          <ul className="space-y-4">
            <li className="border-b border-white/10 pb-3">
              <p className="font-semibold">🌱 Climate Action Workshop</p>
              <p className="text-sm text-cyan-200">March 12, 2026 • Online</p>
            </li>

            <li className="border-b border-white/10 pb-3">
              <p className="font-semibold">🌍 Community Tree Planting</p>
              <p className="text-sm text-cyan-200">April 5, 2026 • New York</p>
            </li>

            <li>
              <p className="font-semibold">♻ Sustainability Summit</p>
              <p className="text-sm text-cyan-200">May 20, 2026 • London</p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Event;
