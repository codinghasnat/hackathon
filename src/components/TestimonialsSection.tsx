import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "It was a fresh experience compared to other hackathons I've attended. Presenting to other competitors and hearing their pitches was memorable, especially with live feedback and rebuttals between the presenters and the judges. Being surrounded by and working with other ambitious Muslims really opened my eye to what our Ummah can achieve..",
    author: "Shad"
  },
  {
    id: 2,
    content: "Alhamdulillah it was a great experience, albeit challenging working through the night into the morning. The brothers all prayed tahajjud together at night, and there was lots of amazing food to keep us going. I would highly recommend this to anyone, especially anyone who has never experienced a hackathon before. ",
    author: "Yasin"
  },
  {
    id: 3,
    content: "I found the haqqathon to be a great learning experience that allowed me to work on a project to benefit those in need. It provided me with the opportunity to build new connections and meet many inspiring people, who I was able to discuss and develop ideas with in a fun and comfortable environment.",
    author: "Musawer"
  },
  {
    id: 4,
    content: "I went to the Haqqathon with no programming experience, but still had an amazing time working to solve a real-life challenge that the Ummah is currently facing."
  + "I struggle with public speaking, and this gave me the opportunity to practice and improve a lot."
  + "It's  an amazing thing to have on your CV and I often mention it in my interviews.",
    author: "Qozfa"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 13000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="testimonials" 
      className="relative py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-haqqathon-dark via-haqqathon-dark to-haqqathon-dark/95 z-0"></div>
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-haqqathon-green/20 blur-3xl"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-loubag text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <Star className="text-haqqathon-green" />
            <span className="light-neon-text">Testimonials</span>
          </h2>
          <div className="h-1 w-20 bg-haqqathon-green mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative h-[400px] md:h-[220px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full transition-all duration-1000 ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <Card className="bg-haqqathon-dark-light/50 border border-haqqathon-green/20 shadow-lg shadow-haqqathon-green/5">
                  <CardContent className="p-6 md:p-8 text-center">
                    <p className="text-lg md:text-xl mb-6 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-medium text-haqqathon-green">{testimonial.author}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 gap-2 relative z-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-haqqathon-green"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
