import React from 'react';

const AnimatedVenueSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const venues = [
    {
      id: 1,
      name: "WeWork",
      logo: "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/65b0dda1119ff78e1f4058ba_WeWork%20Logo.png",
      description: "Premium coworking spaces worldwide",
      side: "left"
    },
    {
      id: 2,
      name: "Mindspace",
      logo: "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/65b0dda1ec5a5639f9be5f03_Mindpsace%20Logo.png",
      description: "Creative workspace solutions",
      side: "right"
    },
    {
      id: 3,
      name: "Engel Völkers",
      logo: "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/65b0dda1a4f85e49b56b5a28_Engel%20V%C3%B6lkers%20Logo.png",
      description: "Luxury real estate offices",
      side: "left"
    },
    {
      id: 4,
      name: "Servercorp",
      logo: "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/65b0dda2e43f312bae97f92a_Servercorp%20Logo.png",
      description: "Professional business centers",
      side: "right"
    },
    {
      id: 5,
      name: "Talent Garden",
      logo: "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/65b0dda15eaca916786fb924_Talent%20Garden%20Logo.png",
      description: "Innovation campuses",
      side: "left"
    },
    {
      id: 6,
      name: "Elron Club",
      logo: "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/65b0dda15cab36f3e4177372_elron%20club%20Logo.png",
      description: "Exclusive business clubs",
      side: "right"
    },
    {
      id: 7,
      name: "Hoyer",
      logo: "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/65b0dda1d67ce0c6894b77e7_Hoyer%20Logo.png",
      description: "Logistics and transport hubs",
      side: "left"
    },
    {
      id: 8,
      name: "Stuttgart Airport",
      logo: "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/65b0dda1dac117e989491be3_Stuttgart%20Airport%20Logo.png",
      description: "International airport terminals",
      side: "right"
    },
    {
      id: 9,
      name: "David Lloyd Clubs",
      logo: "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/65b0dda152273fbf1f713676_David%20Lloyd%20Clubs%20Logo.png",
      description: "Premium fitness centers",
      side: "left"
    },
    {
      id: 10,
      name: "Grand Hyatt",
      logo: "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/65b0dda1aea7bfa65696932b_Grand%20Hyatt%20Logo.png",
      description: "Luxury hotel chains",
      side: "right"
    },
    {
      id: 11,
      name: "Burger King",
      logo: "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/65b0dda155110a3097eb0912_Burger%20King%20Logo.png",
      description: "Quick service restaurants",
      side: "left"
    },
    {
      id: 12,
      name: "Homes Place",
      logo: "https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/65b0dda17fa33582fe5af304_Homes%20Place%20Logo.png",
      description: "Residential complexes",
      side: "right"
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % venues.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [venues.length]);

  const getVisibleVenues = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + venues.length) % venues.length;
      visible.push({
        ...venues[index],
        position: i,
        opacity: Math.max(0, 1 - Math.abs(i) * 0.3)
      });
    }
    return visible;
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Premium Venue Network
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Reach your audience in the world's most prestigious locations
          </p>
        </div>

        {/* Animated Venue Display */}
        <div className="relative h-96 flex items-center justify-center">
          {/* Central Text Area */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-bold text-white mb-4 animate-pulse">
                {venues[currentIndex].name}
              </div>
              <div className="text-xl text-purple-200 animate-fade-in">
                {venues[currentIndex].description}
              </div>
            </div>
          </div>

          {/* Animated Logos */}
          {getVisibleVenues().map((venue, index) => (
            <div
              key={venue.id}
              className={`absolute transition-all duration-1000 ease-in-out ${
                venue.side === 'left' ? 'left-0' : 'right-0'
              }`}
              style={{
                transform: `translateY(${venue.position * 80}px) translateX(${
                  venue.side === 'left' ? venue.position * -50 : venue.position * 50
                }px) scale(${1 - Math.abs(venue.position) * 0.2})`,
                opacity: venue.opacity,
                zIndex: 5 - Math.abs(venue.position)
              }}
            >
              <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                <img
                  src={venue.logo}
                  alt={venue.name}
                  className="max-w-full max-h-full object-contain filter brightness-0 invert"
                />
              </div>
            </div>
          ))}

          {/* Progress Indicators */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {venues.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">20,000+</div>
            <div className="text-purple-200">Premium Locations</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">32+</div>
            <div className="text-purple-200">Countries Worldwide</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">200M+</div>
            <div className="text-purple-200">Monthly Impressions</div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
        `
      }} />
    </div>
  );
};

export default AnimatedVenueSection;