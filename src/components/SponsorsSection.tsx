import { Card } from "@/components/ui/card";
import { Award, Heart, Users } from "lucide-react";

// Placeholder sponsor data
const sponsors = [
  { id: 1, name: "Deen Developers", logo: "/public/logos/deenDevelopers.jpg", website: "https://deendevelopers.com" },
  { id: 2, name: "IHSAAN by FOSIS", logo: "/public/logos/ihsaan.jpg", website: "https://fosis.uk" },
  { id: 3, name: "Redwood Founders", logo: "/public/logos/redwoodFounders.jpg", website: "https://redwoodfounders.org" },
  { id: 4, name: "Cur8 Capital", logo: "/public/logos/cur8Capital.jpg", website: "https://cur8.capital" },
  { id: 5, name: "Starlight", logo: "/public/logos/starlight.jpg", website: "https://www.starlight.inc" },
  { id: 6, name: "Kestrl", logo: "/public/logos/kestrl.jpg", website: "https://kestrl.io" },
  { id: 7, name: "Sunnamusk", logo: "/public/logos/sunnamusk.jpg", website: "https://sunnamusk.com" },
  { id: 8, name: "Leonardo", logo: "/public/logos/leonardo.jpg", website: "https://www.imperial.ac.uk/business-school/faculty-research/research-centres/leonardo-centre-business-society/" },
  { id: 9, name: "My Salah Mat", logo: "/public/logos/mySalahMat.jpg", website: "https://mysalahmat.com" }
];

const charitySponsor = {
  name: "National Zakat Foundation",
  logo: "/public/logos/NZF.jpg",
  website: "https://nzf.org.uk"
};

const partnerOrg = {
  name: "ISOC",
  logo: "/public/logos/isoc.jpg",
  website: "https://www.theisoc.com/home"
};

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-green-waves bg-cover bg-fixed opacity-5 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-haqqathon-dark via-haqqathon-dark to-haqqathon-dark/95 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 font-loubag">
            <Award className="text-haqqathon-green" />
            <span className="light-neon-text">Our Partners</span>
          </h2>
          <div className="h-1 w-20 bg-haqqathon-green mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We're proud to partner with these amazing organizations who make Haqqathon possible.
          </p>
        </div>

        {/* Special Partners Section */}
        <div className="max-w-6xl mx-auto mb-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Charity Partner */}
            <Card className="bg-haqqathon-dark-light/30 border-2 border-red-500/20 hover:border-red-500/40 transition-all hover:shadow-md hover:shadow-red-500/10">
              <div className="p-8 flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="text-red-500" />
                  <span className="text-red-500 font-medium">Charity Partner</span>
                </div>
                <div className="w-32 h-32 bg-white/10 rounded-full mb-6 flex items-center justify-center overflow-hidden">
                  <img src={charitySponsor.logo} alt={charitySponsor.name} className="w-30 h-30 object-contain" />
                </div>
                <a 
                  href={charitySponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-medium neon-red-text hover:text-red-400 transition-colors"
                >
                  {charitySponsor.name}
                </a>
              </div>
            </Card>

            {/* Partner Organization */}
            <Card className="bg-haqqathon-dark-light/30 border-2 border-haqqathon-green/20 hover:border-haqqathon-green/40 transition-all hover:shadow-md hover:shadow-haqqathon-green/10">
              <div className="p-8 flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="text-haqqathon-green" />
                  <span className="text-haqqathon-green font-medium">Sister Society</span>
                </div>
                <div className="w-32 h-32 bg-white/10 rounded-full mb-6 flex items-center justify-center overflow-hidden">
                  <img src={partnerOrg.logo} alt={partnerOrg.name} className="w-30 h-30 object-contain" />
                </div>
                <a 
                  href={partnerOrg.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-medium neon-text hover:text-haqqathon-green-light transition-colors"
                >
                  {partnerOrg.name}
                </a>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Other Sponsors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {sponsors.map(sponsor => (
            <Card key={sponsor.id} className="bg-haqqathon-dark-light/30 border border-haqqathon-green/10 hover:border-haqqathon-green/30 transition-all hover:shadow-md hover:shadow-haqqathon-green/10">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white/10 rounded-full mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="object-contain w-22 h-22"
                  />
                </div>
                <a 
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-medium light-neon-text hover:text-haqqathon-green-light transition-colors"
                >
                  {sponsor.name}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
