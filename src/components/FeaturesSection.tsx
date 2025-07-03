import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  MessageSquare, 
  BarChart3,
  Quote
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Current Content",
      description: "Over 50 cases designed for the current version of the oral board exam. Practice on your own timetable, without the need for a textbook or partner.",
      color: "from-blue-100 to-blue-200 text-blue-600"
    },
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Ask the patient for their history or the nurse to draw labs: the AI responds in the right role, every time.",
      color: "from-green-100 to-green-200 text-green-600"
    },
    {
      icon: BarChart3,
      title: "Track Your Progress",
      description: "See where you excel and where you need to improve on our post-case Score Reports - complete with personalized insights, clinical pearls, and actionable suggestions.",
      color: "from-purple-100 to-purple-200 text-purple-600"
    },
  ];

  const testimonials = [
    {
      quote: "I wish I had this during my residency. The cases feel so real, and the feedback is spot-on.",
      author: "Dr. Michael Chen, EM Attending"
    },
    {
      quote: "Passed my boards on the first try, thanks to BoardED. The Score Reports made a huge difference!",
      author: "Dr. Amanda Rodriguez, EM Attending"
    },
    {
      quote: "As someone who failed the first time, I can't recommend this enough. It changed everything.",
      author: "Dr. James Wilson, EM Attending"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-md-blue-100 rounded-full mb-6">
              <span className="text-sm text-md-blue-700 font-medium">Everything you need to succeed</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-noto-sans">
              Built by doctors who get it
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We know board prep is stressful. That's why we created BoardED with everything you actually need 
              to feel confident and prepared - nothing more, nothing less.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 elevation-1 hover:elevation-3 transition-all duration-300 group bg-white"
              >
                <CardContent className="p-8">
                  <div className={`bg-gradient-to-br ${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-noto-sans">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 elevation-2 border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-roboto-slab">
                What fellow physicians are saying
              </h3>
              <p className="text-gray-600">Real feedback from real doctors who've been where you are</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="text-center">
                  <div className="bg-md-blue-25 p-6 rounded-2xl mb-4 relative">
                    <Quote className="h-6 w-6 text-md-blue-400 mb-3 mx-auto" />
                    <p className="text-gray-700 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
