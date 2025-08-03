import React from 'react';
import { Check, Star, Zap, Shield, Globe, Headphones } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = React.useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started with DOOH",
      price: isAnnual ? 99 : 129,
      originalPrice: isAnnual ? 129 : 159,
      features: [
        "Up to 5 screens",
        "Basic analytics",
        "Standard support",
        "Content scheduling",
        "Mobile app access",
        "Basic templates"
      ],
      popular: false,
      color: "gray"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with multiple locations",
      price: isAnnual ? 299 : 399,
      originalPrice: isAnnual ? 399 : 499,
      features: [
        "Up to 50 screens",
        "Advanced analytics",
        "Priority support",
        "Custom branding",
        "API access",
        "Advanced templates",
        "Multi-user management",
        "Campaign optimization"
      ],
      popular: true,
      color: "indigo"
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex requirements",
      price: "Custom",
      features: [
        "Unlimited screens",
        "Enterprise analytics",
        "24/7 dedicated support",
        "White-label solution",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee",
        "Training & onboarding"
      ],
      popular: false,
      color: "purple"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Deploy campaigns in minutes with our intuitive platform"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with encrypted content delivery"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access premium venues in 32+ countries worldwide"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert support team available around the clock"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Choose the perfect plan for your digital advertising needs. No hidden fees, no surprises.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg ${!isAnnual ? 'text-white font-semibold' : 'text-purple-200'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-white' : 'bg-purple-400'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-indigo-600 transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-white font-semibold' : 'text-purple-200'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                Save 25%
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular ? 'ring-4 ring-indigo-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    <Star className="inline h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <div className={`px-8 py-8 ${plan.popular ? 'pt-16' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    {typeof plan.price === 'number' ? (
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">
                          ${plan.price}
                        </span>
                        <span className="text-gray-500 ml-2">
                          /{isAnnual ? 'year' : 'month'}
                        </span>
                        {plan.originalPrice && (
                          <span className="text-lg text-gray-400 line-through ml-2">
                            ${plan.originalPrice}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose FRAMEN?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get more than just digital advertising - get a complete solution built for success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate the billing accordingly."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to get started."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
              },
              {
                question: "Do you offer custom solutions?",
                answer: "Absolutely! Our Enterprise plan includes custom integrations, white-label solutions, and dedicated support."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of businesses already using FRAMEN to reach their audience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-indigo-600 transition-all transform hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;