import { useEffect, useState } from "react";

const EventImageCard = ({ images, interval = 3000, fadeDuration = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const upcoming = (index + 1) % images.length;
      setNextIndex(upcoming);
      setShowNext(true);

      setTimeout(() => {
        setIndex(upcoming);
        setShowNext(false);
      }, fadeDuration);
    }, interval);

    return () => clearInterval(timer);
  }, [index, images.length, interval, fadeDuration]);

  return (
    <div className="relative w-full h-full rounded-4xl overflow-hidden">

      {/* Current image */}
      <img
        src={images[index]}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[${fadeDuration}ms] ${
          showNext ? "opacity-80" : "opacity-100"
        }`}
      />

      {/* Next image */}
      <img
        src={images[nextIndex]}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[${fadeDuration}ms] ${
          showNext ? "opacity-100" : "opacity-80"
        }`}
      />

    </div>
  );
};

export default EventImageCard;
