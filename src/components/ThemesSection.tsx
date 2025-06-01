import { Palette } from "lucide-react";

const themes = [
  "AI-Driven Systems",
  "Product Design & Development",
  "Redefining Charity",
  "Islamic FinTech",
  "Sustainable Business"
];

const ThemesSection = () => {
  return (
    <section
      id="themes"
      className="relative py-20"
    >
      <div className="absolute inset-0 bg-haqqathon-dark"></div>
      
      <div className="container mx-auto relative z-10 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 font-loubag">
            <Palette className="text-haqqathon-green" size={28} />
            <span className="light-neon-text">Our Themes</span>
          </h2>
          <div className="h-1 w-20 bg-haqqathon-green mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {themes.map((theme, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-bold neon-text leading-tight min-h-[3em] flex items-center justify-center">
                  {theme}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemesSection; 