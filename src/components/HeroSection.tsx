import { Button } from "@/components/ui/button";
import EventCountdown from "./EventCountdown";
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen pt-16 overflow-hidden">
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-haqqathon-dark-light to-haqqathon-dark z-0"></div>
        <div className="text-center space-y-8 max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-7xl font-bold animate-fade-in font-loubag">
            <div className="mb-4 light-neon-text">STEMMuslims</div>
            <div className="neon-text">Haqqathon</div>
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Where Muslim minds build, innovate and reimagine the future.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center relative z-20">
            <div className="flex flex-col gap-4">
              <Button 
                asChild 
                className="bg-haqqathon-green hover:bg-haqqathon-green-light text-black font-bold py-2 px-6"
              >
                <a href="#tickets">Sign Up Now!</a>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-haqqathon-green text-haqqathon-green hover:bg-haqqathon-green/10"
                asChild
              >
                <a href="#mission">Learn More</a>
              </Button>
            </div>

            {/* Trailer Box */}
            <div className="mt-4 md:mt-0 w-full md:w-auto flex justify-center">
              <a 
                href="#trailer" 
                className="group relative block w-full md:w-[200px] h-[96px] bg-haqqathon-dark-light rounded-lg overflow-hidden border-2 border-haqqathon-green/50 hover:border-haqqathon-green transition-all duration-300 hover:shadow-lg hover:shadow-haqqathon-green/20"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-haqqathon-green/20 to-transparent group-hover:from-haqqathon-green/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-haqqathon-green/20 flex items-center justify-center mr-3 group-hover:scale-110 group-hover:bg-haqqathon-green/30 transition-all duration-300">
                    <svg className="w-6 h-6 text-haqqathon-green group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="text-left md:text-center">
                    <h3 className="text-lg font-bold text-haqqathon-green group-hover:scale-105 transition-transform duration-300 hidden md:block">Watch Our</h3>
                    <h2 className="text-lg font-bold text-haqqathon-green group-hover:scale-105 transition-transform duration-300 hidden md:block">Trailer!</h2>
                    <h3 className="text-lg font-bold text-haqqathon-green group-hover:scale-105 transition-transform duration-300 md:hidden">Watch Our Trailer!</h3>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-haqqathon-green/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="absolute inset-0 border-2 border-haqqathon-green/0 group-hover:border-haqqathon-green/50 rounded-lg transition-all duration-300"></div>
              </a>
            </div>
          </div>
          
          <div className="pt-4 w-full">
            <p className="text-white/80 mb-4">Event Details</p>
            
            {/* Top Row - When and Until boxes */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="rounded-lg neo-blur p-4 h-[120px] w-full md:w-[250px] flex flex-col justify-center">
                <p className="text-haqqathon-green mb-1 font-medium">When</p>
                <p className="text-sm md:text-base">June 14: 9:00 AM -</p>
                <p className="text-sm md:text-base">June 15: 4:00 PM</p>
              </div>
              
              <div className="rounded-lg neo-blur p-6 h-[120px] w-full md:w-[450px] flex flex-col justify-center">
                <p className="text-lg md:text-xl text-gray-400">
                  <span className="text-haqqathon-green font-medium text-xl md:text-2xl">
                    <EventCountdown />
                  </span>{" "}
                  days until we start{" "}
                  <span className="text-haqqathon-green font-medium inline-block text-xl md:text-2xl">
                    <Typewriter
                      options={{
                        strings: ['building', 'innovating', 'coding', 'pitching'],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 50,
                        cursor: '',
                      }}
                    />
                  </span>
                  ...
                </p>
              </div>
            </div>

            {/* Bottom Row - Map */}
            <div className="rounded-lg neo-blur p-4 h-[400px] w-full">
              <p className="text-haqqathon-green mb-2 font-medium">Location</p>
              <p className="text-sm md:text-base mb-2">Imperial College London</p>
              <p className="text-xs text-gray-400 mb-4">Sir Alexander Fleming Building</p>
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=Sir+Alexander+Fleming+Building,+Imperial+College+London&zoom=17&maptype=roadmap&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"                
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
