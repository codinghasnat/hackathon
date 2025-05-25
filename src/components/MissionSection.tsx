import { Card, CardContent } from "@/components/ui/card";
import { Info, Users, Lightbulb, Sparkles } from "lucide-react";

const MissionSection = () => {
  return (
    <section
      id="mission"
      className="relative py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-haqqathon-dark z-0"></div>
      <div className="absolute  left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(145,226,120,0.4)_0%,rgba(145,226,120,0.2)_50%,rgba(145,226,120,0)_70%)] blur-[100px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 font-loubag">
            <Info className="text-haqqathon-green" size={28} />
            <span className="light-neon-text">Our Mission</span>
          </h2>
          <div className="h-1 w-20 bg-haqqathon-green mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto px-4 relative">
          <Card className="bg-haqqathon-dark-light/50 border border-haqqathon-green/20 shadow-lg shadow-haqqathon-green/5">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-haqqathon-green/10 flex items-center justify-center">
                  <Users className="text-haqqathon-green" size={24} />
                </div>
                <p className="text-lg md:text-xl leading-relaxed">
                  The STEM Muslims Haqqathon is our flagship outreach initiative, empowering Muslim students to create purposeful, impactful solutions for the ummah through technology, design, and entrepreneurship.
                </p>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-haqqathon-green/10 flex items-center justify-center">
                  <Lightbulb className="text-haqqathon-green" size={24} />
                </div>
                <p className="text-lg md:text-xl leading-relaxed">
                  Our mission is to cultivate a space where creative thinking is guided by conviction. Participants work in teams to address real-world challenges, supported by mentorship and grounded in the belief that every skill is an amanah—a trust with significance in both the dunya and akhirah.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-haqqathon-green/10 flex items-center justify-center">
                  <Sparkles className="text-haqqathon-green" size={24} />
                </div>
                <p className="text-lg md:text-xl leading-relaxed">
                  By equipping the next generation of Muslim leaders with the tools to build and serve, we aim to inspire a legacy of innovation and responsibility—sparking action that extends far beyond the event itself.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
