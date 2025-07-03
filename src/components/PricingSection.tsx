
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const PricingSection = () => {
  const plans = [{
    name: "Free Trial",
    price: 0,
    period: "",
    description: "A few cases, just to get started",
    features: ["3 Free Cases", "Basic Score Reports"],
    popular: false,
    buttonText: "Start Free Trial"
  }, {
    name: "Basic",
    price: 99,
    period: "",
    description: "For getting started with AI-powered case practice",
    features: ["10 AI-generated cases", "Advanced performance analytics", "Email support", "Custom case selection"],
    popular: false,
    buttonText: "Subscribe"
  }, {
    name: "Premium",
    price: 349,
    period: "",
    description: "The complete boards prep solution",
    features: ["Unlimited AI-generated cases", "Advanced performance analytics", "Priority email support", "Custom case selection"],
    popular: true,
    buttonText: "Subscribe"
  }, {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For hospitals and residency programs",
    features: ["Everything in Premium", "Multi-user management", "Advanced reporting dashboard", "Custom branding", "Dedicated account manager", "Volume discounts"],
    popular: false,
    buttonText: "Contact Us"
  }];

  return <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-noto-sans">
              Choose your plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with a free trial, then choose the plan that fits your preparation needs.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {plans.map((plan, index) => <Card key={index} className={`relative border-0 elevation-1 hover:elevation-2 transition-all duration-300 h-full flex flex-col ${plan.popular ? 'ring-2 ring-md-blue-600' : ''}`}>
                {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-md-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl lg:text-4xl font-bold text-gray-900">
                      {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">
                    {plan.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0 flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1 mb-6">
                    {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>)}
                  </ul>
                  
                  <Button className={`w-full text-sm ${plan.name === 'Free Trial' ? 'bg-gray-100 hover:bg-gray-200 text-gray-900' : 'bg-md-blue-600 hover:bg-md-blue-700 text-white'}`}>
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            
          </div>
        </div>
      </div>
    </section>;
};

export default PricingSection;
