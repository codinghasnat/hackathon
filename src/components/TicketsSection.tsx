import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Ticket, Clock, Lock, Unlock } from "lucide-react";

const TicketsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  const [tagline, setTagline] = useState("access request pending...");
  const [isReleased, setIsReleased] = useState(false);

  useEffect(() => {
    // Set release date to 3 days from now
    const releaseDate = new Date("May 26, 2025");
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = releaseDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setIsReleased(true);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
      
      // Change tagline based on days left
      if (days === 2) {
        setTagline("system initializing...");
      } else if (days === 1) {
        setTagline("access protocols warming up...");
      } else if (days === 0) {
        setTagline("system unlocking...");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section
      id="tickets"
      className="relative py-20 overflow-hidden"
    >
      {/*<div className="absolute inset-0 bg-green-waves bg-cover bg-fixed opacity-10 z-0"></div> */}
      <div className="absolute inset-0 bg-gradient-to-t from-haqqathon-dark via-haqqathon-dark-light/80 to-haqqathon-dark z-0"></div>
      
     
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 font-loubag">
            <Ticket className="text-haqqathon-green" />
            <span className="light-neon-text">Tickets</span>
          </h2>
          <div className="h-1 w-20 bg-haqqathon-green mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-haqqathon-dark-light/70 border border-haqqathon-green/30 rounded-xl p-6 md:p-10 shadow-lg shadow-haqqathon-green/5">
            {!isReleased ? (
              <>
                <div className="flex items-center justify-center mb-6">
                  <Clock className="text-haqqathon-green animate-pulse mr-2" size={24} />
                  <p className="text-xl md:text-2xl font-mono neon-text animate-float">{tagline}</p>
                </div>
                
                <div className="flex justify-center gap-3 md:gap-6 mb-10">
                  {timeBlocks.map((block, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center py-3 px-4 md:px-6 rounded-md bg-haqqathon-dark border border-haqqathon-green/20 animate-float"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <span className="text-3xl md:text-5xl font-mono font-bold text-white">
                        {block.value < 10 ? `0${block.value}` : block.value}
                      </span>
                      <span className="text-sm text-haqqathon-green mt-1">{block.label}</span>
                    </div>
                  ))}
                </div>
                
                <div className="relative">
                  <Button
                    disabled
                    className="w-full md:w-auto py-6 px-8 text-lg rounded-md bg-gray-700/50 cursor-not-allowed relative overflow-hidden group"
                  >
                    <Lock className="mr-2" />
                    Tickets Locked
                  </Button>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-haqqathon-dark/80 w-full h-full absolute"></div>
                    <div className="neon-border absolute inset-0 opacity-30"></div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="inline-block mb-6 animate-float">
                  <div className="p-4 rounded-full bg-haqqathon-green/20 border border-haqqathon-green animate-pulse-glow">
                    <Unlock className="text-haqqathon-green h-10 w-10 md:h-16 md:w-16" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 neon-text">Tickets Released!</h3>
                <p className="text-lg mb-8">Get your tickets now before they're gone!</p>
                <Button 
                  className="bg-haqqathon-green hover:bg-haqqathon-green-light text-black font-bold py-6 px-8 text-lg rounded-md"
                  asChild
                >
                  <a href="https://lu.ma/xhgq0z3a" target="_blank" rel="noopener noreferrer">
                    <Ticket className="mr-2" />
                    Get Tickets Here
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
