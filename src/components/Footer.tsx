import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-haqqathon-dark py-10 border-t border-haqqathon-green/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center gap-4">
            <img 
              src="/public/logos/stemmTrans.png" 
              alt="STEMM Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h3 className="neon-text text-xl font-loubag tracking-tight mb-2">Haqqathon</h3>
              <p className="text-gray-400 text-sm">STEMMuslims Hackathon 2025</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <a href="#home" className="text-gray-300 hover:text-haqqathon-green">Home</a>
            <a href="#mission" className="text-gray-300 hover:text-haqqathon-green">Our Mission</a>
            <a href="#tickets" className="text-gray-300 hover:text-haqqathon-green">Tickets</a>
            <a href="#testimonials" className="text-gray-300 hover:text-haqqathon-green">Testimonials</a>
            <a href="#trailer" className="text-gray-300 hover:text-haqqathon-green">Trailer</a>
            <a href="#sponsors" className="text-gray-300 hover:text-haqqathon-green">Sponsors</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} STEMMuslims. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-gray-400 border-gray-700 hover:text-haqqathon-green hover:border-haqqathon-green"
              asChild
            >
              <a href="https://linktr.ee/stemmuslims" target="_blank" rel="noopener noreferrer">
                Linktree
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-gray-400 border-gray-700 hover:text-haqqathon-green hover:border-haqqathon-green"
              asChild
            >
              <a href="https://www.linkedin.com/company/stem-muslims-imperial-college-london/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
