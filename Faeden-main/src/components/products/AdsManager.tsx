import React from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Target, BarChart3, Globe, Zap } from 'lucide-react';

const AdsManager = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);

  const videos = [
    {
      src: "https://s3.amazonaws.com/webflow-prod-assets/6364e4e0baec60a3a1eff938/656f31d1abaf9511e8a633ec_Framen-Venues.mp4",
      title: "Premium Venues Network"
    },
    {
      src: "https://s3.amazonaws.com/webflow-prod-assets/6364e4e0baec60a3a1eff938/65b658156ab2d2a7c55c8308_gallery-bb-hotels.webm",
      title: "Hotel & Hospitality"
    },
    {
      src: "https://s3.amazonaws.com/webflow-prod-assets/6364e4e0baec60a3a1eff938/65af957f83e334657533b191_FRAMEN-ScreenManager-Channels.webm",
      title: "Multi-Channel Management"
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Precise Targeting",
      description: "Reach your ideal audience with advanced demographic and location-based targeting across 32+ countries."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track campaign performance with detailed metrics, impressions, and engagement data in real-time."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access premium venues worldwide including coworking spaces, gyms, hotels, and retail locations."
    },
    {
      icon: Zap,
      title: "Instant Launch",
      description: "Launch campaigns in minutes with our intuitive interface and automated optimization."
    }
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  React.useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextVideo();
    }, 8000);

    return () => clearInterval(interval);
  }, [isPlaying, currentVideoIndex]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ads Manager
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Launch, manage, and optimize your Digital Out-of-Home campaigns with precision targeting and real-time analytics
            </p>
          </div>

          {/* Infinity Video Player */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <video
                key={currentVideoIndex}
                className="w-full h-[400px] md:h-[500px] object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={videos[currentVideoIndex].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-1">
                        {videos[currentVideoIndex].title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {currentVideoIndex + 1} of {videos.length}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={prevVideo}
                        className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300"
                      >
                        <ChevronLeft className="h-5 w-5 text-white" />
                      </button>
                      
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300"
                      >
                        {isPlaying ? (
                          <Pause className="h-5 w-5 text-white" />
                        ) : (
                          <Play className="h-5 w-5 text-white" />
                        )}
                      </button>
                      
                      <button
                        onClick={nextVideo}
                        className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300"
                      >
                        <ChevronRight className="h-5 w-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentVideoIndex
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Campaign Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, launch, and optimize successful DOOH campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
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

      {/* Interactive Players Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Interactive Campaign Previews
            </h2>
            <p className="text-xl text-gray-600">
              See your campaigns in action across different venue types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://lite.framen.com/player/8b7a685b-acab-412d-abad-8bcd661c0411",
              "https://lite.framen.com/player/0124d742-6d79-4781-b724-9a572ea2c449",
              "https://lite.framen.com/player/3f1dd3fe-0bf8-4959-9f71-d1dc71cf0658"
            ].map((playerUrl, index) => (
              <div key={index} className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <iframe
                  src={playerUrl}
                  className="w-full h-64"
                  title={`Campaign Preview ${index + 1}`}
                  frameBorder="0"
                  allowFullScreen
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">Campaign Preview {index + 1}</h3>
                  <p className="text-sm text-gray-600 mt-1">Interactive DOOH experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Launch Your Campaign?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start reaching your ideal audience with precision-targeted DOOH advertising
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors transform hover:scale-105">
              Start Free Campaign
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-indigo-600 transition-all transform hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsManager;