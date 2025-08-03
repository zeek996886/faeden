import React from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import MainHero from './components/MainHero';
import CompanyLogos from './components/CompanyLogos';
import Statistics from './components/Statistics';
import DOOHSection from './components/DOOHSection';
import InteractiveMap from './components/InteractiveMap';
import GlobalFeed from './components/GlobalFeed';
import WhyFramen from './components/WhyFramen';
import SuccessStories from './components/SuccessStories';
import ContentCreator from './components/ContentCreator';
import ScreenManager from './components/ScreenManager';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      <MainHero />
      <CompanyLogos />
      <Statistics />
      <DOOHSection />
      <InteractiveMap />
      <GlobalFeed />
      <WhyFramen />
      <SuccessStories />
      <ContentCreator />
      <ScreenManager />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;