import { Button } from "@/components/ui/button";
import { Download, Play, ArrowRight } from "lucide-react";
import heroImage from "@/assets/pos-hero-image.jpg";

const Hero = () => {
  const handleDownload = () => {
    const downloadUrl = "https://github.com/AbdulRehmanZia/POS-Portal/releases/download/POS/POS.System.Setup.0.0.0.exe";
   window.location.href = downloadUrl;
  };
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 px-[50px] gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Streamline Your 
              <span className="block text-brand-light">Retail Operations</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Complete POS solution with advanced analytics, inventory management, 
              barcode scanning, and seamless payment processing. Everything you need 
              to grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="download" 
                size="lg"
                className="text-lg px-8 py-6"
                onClick={handleDownload}
              >
                <Download className="w-5 h-5" />
                Download POS
              </Button>
              <Button 
              variant="secondary"
                size="lg"
                className="text-lg px-8 py-6 border-primary-foreground/30 text-black hover:bg-primary-foreground/10 hover:text-white"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <img 
                src={heroImage} 
                alt="POS System Dashboard" 
                className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;