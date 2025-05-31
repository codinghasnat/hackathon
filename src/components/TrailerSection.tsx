import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Cog } from "lucide-react";

const TrailerSection = () => {
  const [isReleased, setIsReleased] = useState(false);
  const [releaseDate] = useState(new Date("June 4, 2025")); // Example date for trailer release

  useEffect(() => {
    const checkReleaseStatus = () => {
      const now = new Date();
      if (now >= releaseDate) {
        setIsReleased(true);
        return true;
      }
      return false;
    };

    if (checkReleaseStatus()) {
      return;
    }

    const timer = setInterval(() => {
      if (checkReleaseStatus()) {
        clearInterval(timer);
        return;
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [releaseDate]);

  const formattedReleaseDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(releaseDate);

  return (
    <section id="trailer" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-haqqathon-dark/95 z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 font-loubag">
            <Video className="text-haqqathon-green" />
            <span className="light-neon-text">Trailer</span>
          </h2>
          <div className="h-1 w-20 bg-haqqathon-green mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-haqqathon-dark-light/50 border border-haqqathon-green/20 shadow-lg shadow-haqqathon-green/5">
            <CardContent className="p-6 md:p-8">
              {isReleased ? (
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-0 pb-[56.25%] relative">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/DHS8Ud5cc_o?si=n9KkZ026QggNYIqU?rel=0&modestbranding=1"
      
                      title="Haqqathon Trailer"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 bg-haqqathon-dark rounded-md overflow-hidden">
                    <div className="w-full h-0 pb-[56.25%] relative">
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/70 backdrop-blur-sm">
                        <p className="text-xl md:text-2xl font-bold neon-text">Trailer Premieres on {formattedReleaseDate}</p>
                        <div className="relative">
                          <Video className="w-16 h-16 text-haqqathon-green/50 recording-pulse" />
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full recording-dot"></div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>
                      <div className="absolute inset-0 border border-haqqathon-green/30 rounded-md"></div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrailerSection;
