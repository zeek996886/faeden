import React from 'react';
import { Monitor, Settings, BarChart3, Wifi, Shield, Zap } from 'lucide-react';

const ScreenManager = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const hardwareOptions = [
    {
      name: "Smart TV",
      image: "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/65b64f6480c184325a03e79d_Framen-smart-tv.jpg",
      description: "Built-in FRAMEN OS for seamless content management"
    },
    {
      name: "TV Sticks",
      image: "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/65b65187bcfbf52a02f35d19_framen-tv-sticks.jpg",
      description: "Compact solution for existing displays"
    },
    {
      name: "TV Box",
      image: "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/6373dd0309bc31325e8397af_framen%20tv%20box.jpg",
      description: "Professional-grade media player"
    },
    {
      name: "API Integration",
      image: "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/6373ce6094061ea6126e94de_api.png",
      description: "Custom integration solutions"
    }
  ];

  const features = [
    {
      icon: Monitor,
      title: "Multi-Screen Management",
      description: "Control unlimited screens from a single dashboard with real-time monitoring and updates."
    },
    {
      icon: Settings,
      title: "Content Scheduling",
      description: "Schedule content across different time zones with automated playlist management."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track screen performance, uptime, and audience engagement with detailed reporting."
    },
    {
      icon: Wifi,
      title: "Remote Control",
      description: "Manage screens remotely with instant updates and troubleshooting capabilities."
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security with encrypted content delivery and access controls."
    },
    {
      icon: Zap,
      title: "Instant Updates",
      description: "Push content updates instantly across your entire network with zero downtime."
    }
  ];

  const playerImages = [
    "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/65afc189966c1a7d21188742_Players-1.png",
    "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/65afc18a397ac8f839bd78ec_Players-2.png",
    "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/65afc189b18bd83c2c6326ed_Players-4.png"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Screen Manager
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform any display into a smart digital signage solution with our comprehensive screen management platform
            </p>
          </div>

          {/* Management Video */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <video
                className="w-full h-[400px] md:h-[500px] object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://s3.amazonaws.com/webflow-prod-assets/6364e4e0baec60a3a1eff938/65afcfaf8b95b86235f1d840_FRAMEN-ScreenManager-Locations.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Manage Screens Globally
                  </h3>
                  <p className="text-white/80">
                    Control your entire digital signage network from anywhere in the world
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Screen Management Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage, monitor, and optimize your digital signage network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hardware Options */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hardware Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect hardware for your digital signage needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hardwareOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
                <div className="h-48 bg-gray-100">
                  <img
                    src={option.image}
                    alt={option.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {option.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Player Interface Showcase */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Intuitive Player Interface
            </h2>
            <p className="text-xl text-gray-600">
              User-friendly interface designed for seamless content management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {playerImages.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={image}
                  alt={`Player Interface ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Player View {index + 1}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Advanced player interface with real-time controls
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-indigo-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Managing Your Screens Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses using FRAMEN Screen Manager for their digital signage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors transform hover:scale-105">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105">
              Request Hardware
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenManager;