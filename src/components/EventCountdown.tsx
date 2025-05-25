import { useEffect, useState } from "react";

const EventCountdown = () => {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const eventDate = new Date("2025-06-14T09:00:00");
    
    const calculateDays = () => {
      const now = new Date();
      const diffTime = eventDate.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDays(diffDays);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(interval);
  }, []);

  return days;
};

export default EventCountdown;
