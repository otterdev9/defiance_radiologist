import React from 'react';
import StickyNavigationBar from '../../components/ui/StickyNavigationBar';
import HeroSection from './components/HeroSection';
import CredentialsSection from './components/CredentialsSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ServiceAreasSection from './components/ServiceAreasSection';
import InsuranceSection from './components/InsuranceSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

const LandingPage = () => {
  const scrollToSection = (sectionId, offset = 60) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element?.getBoundingClientRect()?.top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScheduleClick = () => {
    scrollToSection('contact', 60);
  };

  const handleServicesClick = () => {
    scrollToSection('services', 60);
  };

  return (
    <div className="min-h-screen bg-background">
      <StickyNavigationBar />
      
      <HeroSection 
        onScheduleClick={handleScheduleClick}
        onServicesClick={handleServicesClick}
      />
      
      <CredentialsSection />
      
      <ServicesSection />
      
      <TestimonialsSection />
      
      <ServiceAreasSection />
      
      <InsuranceSection />
      
      <ContactSection />
      
      <FooterSection />
    </div>
  );
};

export default LandingPage;