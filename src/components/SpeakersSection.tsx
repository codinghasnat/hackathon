import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronUp, ChevronDown, Megaphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Speaker {
  id: number;
  name: string;
  description: string;
  linkedinUrl: string;
  imageUrl: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Areeb Siddiqui",
    description: "CEO and Founder of Kestrl",
    linkedinUrl: "https://www.linkedin.com/in/areeb-siddiqui-01b06144/",
    imageUrl: "https://media.licdn.com/dms/image/v2/C4D03AQFsi-AvP2t4NA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1614171601402?e=1753920000&v=beta&t=KkRczdH0mqzck-kT3OZxcIpRIIWNf2v7YjvHeCCg1mg"
  },
  {
    id: 2,
    name: "Shahbaz Ahmed",
    description: "CEO and Founder Starlight",
    linkedinUrl: "https://www.linkedin.com/in/shahbaz-sa-ahmad/",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQGyjjvCBIcqVA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718214964854?e=1753920000&v=beta&t=5fP5l0ZwPIPYn6y7YzmidaTZouTLJVrOMoEFHzUEVOA"
  },
  {
    id: 3,
    name: "Kamal Ali",
    description: "CEO and Founder of My Salah Mat",
    linkedinUrl: "https://www.linkedin.com/in/kamal-ali/",
    imageUrl: "https://media.licdn.com/dms/image/v2/C4E03AQHWmYBRgWbtig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1659097283718?e=1753920000&v=beta&t=tPB5P9co1a7M_lm4mccDCtBFhsYvqFR46lxxr2vFAVs"
  },
  {
    id: 4,
    name: "Faheema Nagdee",
    description: "Communications and Digital Campaigns Lead at Bite Back",
    linkedinUrl: "https://www.linkedin.com/in/faheemah-nagdee-736700215/",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQGBZvPLFgKHTQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727720492607?e=1753920000&v=beta&t=xWt6fpqnrSplGj_yE28Qvfp3acLx84s9Zg_qFvg0_tw"
  },
  {
    id: 5,
    name: "Ibrahim Javed",
    description: "Senior Product Manager @ BCG X | Co-founder @ Deen Developers",
    linkedinUrl: "https://www.linkedin.com/in/ibrahim-javed-282497114",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQGs1y55MOTHQA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1682936731309?e=1753920000&v=beta&t=LAaMEHArvhRsD4ICjP_H3rpYzIBfkQTljOtVDDZXaSA"
  },
  {
    id: 6,
    name: "Hana Ameer",
    description: "Creative & Strategic Events Manager | Expert in Sustainable Fashion & Climate Communication",
    linkedinUrl: "https://www.linkedin.com/in/hana-amer-a969335a/",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E35AQEftZiOlW_nkw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1724160591148?e=1748811600&v=beta&t=zuBYI-NSVekkJXfZknd6OaiQZGykvlDK-g44nLBayiE"
  }, 
  {
    id: 7,
    name: "Moin Bukhari",
    description: "Founding engineer at Starlight",
    linkedinUrl: "https://www.linkedin.com/in/moin-bukhari/",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQEb_VLqjG2xzw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729629722139?e=1753920000&v=beta&t=Flngoj1pv3mKsia9MGJ3SwoICZ61RoBMOzITYmvpIoA"
  }
];

const TRANSITION_DURATION = 500; // Duration in milliseconds
const SCROLL_THRESHOLD = 50; // Minimum scroll delta to trigger navigation

const SpeakersSection = () => {
  const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const scrollAccumulator = useRef(0);
  const lastScrollTime = useRef(0);

  // Add window resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevious = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSpeakerIndex((prev) => {
      const increment = isMobile ? 1 : 2;
      return prev === 0 ? (isMobile ? speakers.length - 1 : speakers.length - 2) : prev - increment;
    });
    setTimeout(() => setIsAnimating(false), TRANSITION_DURATION);
  }, [isAnimating, isMobile]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSpeakerIndex((prev) => {
      const increment = isMobile ? 1 : 2;
      const maxIndex = isMobile ? speakers.length - 1 : speakers.length - 2;
      return prev >= maxIndex ? 0 : prev + increment;
    });
    setTimeout(() => setIsAnimating(false), TRANSITION_DURATION);
  }, [isAnimating, isMobile]);

  // Handle scroll wheel navigation with improved debouncing
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      // Get the speaker card element
      const speakerCard = document.querySelector('.speaker-card');
      if (!speakerCard) return;

      // Check if the event target is within the speaker card
      const isWithinCard = speakerCard.contains(event.target as Node);
      
      if (!isWithinCard) {
        // If outside the card, let the default scroll behavior happen
        return;
      }

      // If inside the card, prevent default and handle speaker navigation
      event.preventDefault();
      event.stopPropagation();
      
      if (isAnimating) return;
      
      const now = Date.now();
      if (now - lastScrollTime.current < TRANSITION_DURATION) return;
      
      // For trackpad, use a smaller threshold and don't accumulate
      const isTrackpad = Math.abs(event.deltaY) < 50;
      const threshold = isTrackpad ? 10 : SCROLL_THRESHOLD;
      
      if (isTrackpad) {
        // For trackpad, use the raw deltaY
        if (event.deltaY > threshold) {
          handleNext();
          lastScrollTime.current = now;
        } else if (event.deltaY < -threshold) {
          handlePrevious();
          lastScrollTime.current = now;
        }
      } else {
        // For mouse wheel, use accumulation
        scrollAccumulator.current += event.deltaY;
        
        if (Math.abs(scrollAccumulator.current) >= threshold) {
          if (scrollAccumulator.current > 0) {
            handleNext();
          } else {
            handlePrevious();
          }
          scrollAccumulator.current = 0;
          lastScrollTime.current = now;
        }
      }
    };

    const handleTouch = (event: TouchEvent) => {
      // Get the speaker card element
      const speakerCard = document.querySelector('.speaker-card');
      if (!speakerCard) return;

      // Check if the event target is within the speaker card
      const isWithinCard = speakerCard.contains(event.target as Node);
      
      if (!isWithinCard) {
        // If outside the card, let the default touch behavior happen
        return;
      }

      // If inside the card, prevent default and handle speaker navigation
      event.preventDefault();
      
      if (isAnimating) return;
      
      const now = Date.now();
      if (now - lastScrollTime.current < TRANSITION_DURATION) return;

      const touch = event.touches[0];
      const startY = touch.clientY;

      const handleTouchMove = (moveEvent: TouchEvent) => {
        const currentY = moveEvent.touches[0].clientY;
        const deltaY = currentY - startY;

        if (Math.abs(deltaY) > 50) { // Threshold for touch movement
          if (deltaY > 0) {
            handlePrevious();
          } else {
            handleNext();
          }
          lastScrollTime.current = now;
          document.removeEventListener('touchmove', handleTouchMove);
        }
      };

      const handleTouchEnd = () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };

      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    };

    // Get the section element
    const section = document.getElementById('speakers');
    if (section) {
      section.addEventListener('wheel', handleWheel, { passive: false });
      section.addEventListener('touchstart', handleTouch, { passive: false });
    }

    return () => {
      if (section) {
        section.removeEventListener('wheel', handleWheel);
        section.removeEventListener('touchstart', handleTouch);
      }
    };
  }, [isAnimating, handleNext, handlePrevious]);

  return (
    <section id="speakers" className="py-20 bg-gradient-to-b from-haqqathon-dark/95 to-haqqathon-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Megaphone className="w-8 h-8 text-haqqathon-green" />
            <h2 className="text-3xl md:text-4xl font-loubag light-neon-text">
              Our Speakers
            </h2>
          </div>
          <div className="w-24 h-1 bg-haqqathon-green mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-1/2 -translate-x-1/2 -top-6 z-10 p-2 rounded-full bg-haqqathon-dark-light hover:bg-haqqathon-green/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous speaker"
              disabled={isAnimating}
            >
              <ChevronUp className="w-6 h-6 text-haqqathon-green" />
            </button>

            <button
              onClick={handleNext}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-4 -bottom-2 z-10 p-2 rounded-full bg-haqqathon-dark-light hover:bg-haqqathon-green/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next speaker"
              disabled={isAnimating}
            >
              <ChevronDown className="w-6 h-6 text-haqqathon-green" />
            </button>

            {/* Speaker Card */}
            <div 
              className="rounded-lg bg-haqqathon-dark-light/50 border border-haqqathon-green/20 shadow-lg shadow-haqqathon-green/5 p-8 overflow-visible speaker-card"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSpeakerIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: TRANSITION_DURATION / 1000, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {/* First Speaker */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: TRANSITION_DURATION / 1000 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-haqqathon-green">
                      <img
                        src={speakers[currentSpeakerIndex].imageUrl}
                        alt={speakers[currentSpeakerIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <a
                        href={speakers[currentSpeakerIndex].linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <h3 className="text-2xl font-bold mb-2 text-haqqathon-green group-hover:text-haqqathon-green-light transition-colors">
                          {speakers[currentSpeakerIndex].name}
                        </h3>
                      </a>
                      <p className="text-gray-400">
                        {speakers[currentSpeakerIndex].description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Second Speaker - Hidden on Mobile */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: TRANSITION_DURATION / 1000 }}
                    className="hidden md:flex flex-col items-center gap-4"
                  >
                    <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-haqqathon-green">
                      <img
                        src={speakers[(currentSpeakerIndex + 1) % speakers.length].imageUrl}
                        alt={speakers[(currentSpeakerIndex + 1) % speakers.length].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <a
                        href={speakers[(currentSpeakerIndex + 1) % speakers.length].linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <h3 className="text-2xl font-bold mb-2 text-haqqathon-green group-hover:text-haqqathon-green-light transition-colors">
                          {speakers[(currentSpeakerIndex + 1) % speakers.length].name}
                        </h3>
                      </a>
                      <p className="text-gray-400">
                        {speakers[(currentSpeakerIndex + 1) % speakers.length].description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center gap-2 mt-6 relative z-10">
              {Array.from({ length: Math.ceil(speakers.length / (isMobile ? 1 : 2)) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSpeakerIndex(index * (isMobile ? 1 : 2))}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    Math.floor(currentSpeakerIndex / (isMobile ? 1 : 2)) === index
                      ? "bg-haqqathon-green"
                      : "bg-gray-600 hover:bg-gray-500"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                  aria-label={`Go to speaker ${index + 1}`}
                  disabled={isAnimating}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection; 