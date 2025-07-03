
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play, Brain, Users, CheckCircle, Heart, Star, MessageSquare, TrendingUp } from "lucide-react";
import { useEffect } from "react";

const HeroSection = () => {
  const scrollToVideos = () => {
    const videosSection = document.getElementById('videos-section');
    if (videosSection) {
      const offsetTop = videosSection.offsetTop - 100; // Reduced offset since videos are now in hero section
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Load Noto Sans font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      // Cleanup function to remove the link if component unmounts
      document.head.removeChild(link);
    };
  }, []);

  const steps = [{
    number: "01",
    icon: Play,
    title: "Jump Right In",
    description: "Pick a specialty area you want to work on, or let BoardED surprise you with a case that matches your learning needs.",
    color: "bg-md-blue-100 text-md-blue-600",
    image: "/lovable-uploads/a5a9ff95-ee99-4ef0-98ad-17faded1b5c0.png"
  }, {
    number: "02",
    icon: MessageSquare,
    title: "Have Real Conversations",
    description: "Talk through cases with our AI examiner just like you would for the real thing - ask for vital signs, talk to the patient and gather a history, ask the nurse to draw labs, speak professionally to consultants. The AI will switch roles just like the examiner will for the real deal.",
    color: "bg-green-100 text-green-600",
    image: "/lovable-uploads/3dac6e66-cd85-45b0-b5f3-875b456a57d2.png"
  }, {
    number: "03",
    icon: TrendingUp,
    title: "Learn & Improve",
    description: "Get thoughtful feedback on your approach, discover knowledge gaps, and watch your confidence grow with every case.",
    color: "bg-purple-100 text-purple-600",
    image: "/lovable-uploads/3e470cc7-fbcd-4b45-ad0e-5d6580fb7f8a.png"
  }];

  return <section className="min-h-screen bg-gradient-to-br from-md-blue-25 via-white to-md-blue-50 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Hero Content - Full Width */}
          <div className="text-center space-y-8">
            {/* Main Headline */}
            <div className="space-y-4 mt-7">
              <h1 className="text-6xl font-semibold text-gray-900 leading-tight font-noto-sans">
                Let's Get You{" "}
                <span className="text-md-blue-600 relative">
                  BoardED.
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-md-blue-300 to-md-blue-500 rounded-full opacity-60"></div>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto py-[10px]">
                Master the Emergency Medicine Oral Board Exam. Practice unlimited cases with AI-powered scenarios verified by board-certified emergency physicians.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-md-blue-600 hover:bg-md-blue-700 text-white px-8 py-4 text-lg font-medium elevation-2 hover:elevation-4 transition-all rounded-full group">
                Start Studying
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-md-blue-200 text-md-blue-700 hover:bg-md-blue-25 px-8 py-4 text-lg font-medium rounded-full" onClick={scrollToVideos}>
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* How BoardED Works Section - New Position */}
          <div className="mt-10 py-4 bg-gradient-to-br from-gray-50 to-md-blue-25 rounded-3xl">
            <div className="max-w-7xl mx-auto px-8">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 elevation-1">
                  <Heart className="h-4 w-4 text-red-400 mr-2 fill-current" />
                  <span className="text-sm text-gray-700 font-medium">Simple, effective, supportive</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-noto-sans">
                  How BoardED works
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">We've made it super simple. No complicated setup, no overwhelming features - just great cases and personalized feedback to maximize your study time.</p>
              </div>

              {/* Steps */}
              <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 mb-6">
                {steps.map((step, index) => <div key={index} className="relative">
                    <Card className="border-0 elevation-2 h-full bg-white hover:elevation-3 transition-all">
                      <CardContent className="p-8 flex flex-col h-full">
                        {/* Step Number Badge */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="text-4xl font-bold text-gray-200">
                            {step.number}
                          </div>
                          <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center`}>
                            <step.icon className="h-6 w-6" />
                          </div>
                        </div>
                        
                        {/* Content - grows to fill space */}
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4 font-noto-sans">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-8">
                            {step.description}
                          </p>
                        </div>
                        
                        {/* Image - Now larger and consistently sized, aligned to bottom */}
                        {step.image && (
                          <div className="rounded-xl overflow-hidden shadow-lg mt-auto">
                            <img 
                              src={step.image} 
                              alt={`${step.title} interface`}
                              className="w-full h-64 object-cover"
                            />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                    
                    {/* Arrow (hidden on mobile, shown on desktop between steps) */}
                    {index < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <div className="bg-white w-8 h-8 rounded-full elevation-1 flex items-center justify-center">
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>}
                  </div>)}
              </div>
            </div>
          </div>

          {/* YouTube Videos Section */}
          <div id="videos-section" className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <div className="aspect-video">
                <iframe className="w-full h-full rounded-xl" src="https://www.youtube.com/embed/JAel4ixVlVI" title="YouTube video 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
              <div className="aspect-video">
                <iframe className="w-full h-full rounded-xl" src="https://www.youtube.com/embed/ms_hUayCvRw" title="YouTube video 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </div>
          </div>

          {/* Bottom Stats Section */}
          <div className="mt-20 text-center">
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 elevation-1 border border-white/50">
              <p className="text-gray-600 mb-6">Trusted by emergency physicians at leading hospitals</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-gray-400 font-medium">UCLA</div>
                <div className="text-gray-400 font-medium">NYU</div>
                <div className="text-gray-400 font-medium">UCSF</div>
                <div className="text-gray-400 font-medium">Mass General</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
