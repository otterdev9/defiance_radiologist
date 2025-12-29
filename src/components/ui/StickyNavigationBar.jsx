import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const StickyNavigationBar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'home', label: 'Home', offset: 0 },
    { id: 'about', label: 'About Professor Semaan', offset: 60 },
    { id: 'services', label: 'Our Services', offset: 60 },
    { id: 'testimonials', label: 'Patient Stories', offset: 60 },
    { id: 'contact', label: 'Contact & Appointment', offset: 60 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement?.scrollHeight;

      setIsScrolled(scrollPosition > 10);

      const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));

      const sectionElements = sections?.map(section => ({
        id: section?.id,
        element: document.getElementById(section?.id),
      }));

      for (let i = sectionElements?.length - 1; i >= 0; i--) {
        const section = sectionElements?.[i];
        if (section?.element) {
          const rect = section?.element?.getBoundingClientRect();
          if (rect?.top <= 100) {
            setActiveSection(section?.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId, offset = 60) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element?.getBoundingClientRect()?.top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setIsMobileMenuOpen(false);
    }
  };

  const handleAppointmentClick = () => {
    scrollToSection('contact', 60);
    const contactForm = document.querySelector('#contact form input');
    if (contactForm) {
      setTimeout(() => contactForm?.focus(), 500);
    }
  };

  return (
    <>
      <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={(e) => {
            e?.preventDefault();
            scrollToSection('home', 0);
          }}>
            <div className="nav-logo-icon">
              <Icon name="Activity" size={24} color="#FFFFFF" />
            </div>
            <div className="nav-logo-text-wrapper">
              <span className="nav-logo-text">Defiance Radiologist</span>
              <span className="nav-logo-text">Associates</span>
            </div>
          </a>

          <div className="nav-links">
            {sections?.map((section) => (
              <button
                key={section?.id}
                className={`nav-link ${activeSection === section?.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section?.id, section?.offset)}
              >
                {section?.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <div className="progress-indicator">
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div
            className="mobile-menu-backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className={`mobile-menu-content ${isMobileMenuOpen ? '' : 'closed'}`}>
            <div className="mobile-menu-header">
              <div className="nav-logo">
                <div className="nav-logo-icon">
                  <Icon name="Activity" size={20} color="#FFFFFF" />
                </div>
                <span className="text-lg font-semibold text-foreground font-headline">
                  Defiance Radiologist
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <Icon name="X" size={24} color="var(--color-foreground)" />
              </button>
            </div>

            <div className="mobile-menu-links">
              {sections?.map((section) => (
                <button
                  key={section?.id}
                  className={`mobile-menu-link ${activeSection === section?.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(section?.id, section?.offset)}
                >
                  {section?.label}
                </button>
              ))}

              <Button
                variant="default"
                fullWidth
                className="cta-button cta-button-primary mt-4"
                iconName="Calendar"
                iconPosition="left"
                onClick={handleAppointmentClick}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
      <button
        className="floating-cta"
        onClick={handleAppointmentClick}
        aria-label="Schedule appointment"
      >
        <Button
          variant="default"
          size="icon"
          className="cta-button cta-button-primary w-14 h-14 rounded-full"
        >
          <Icon name="Calendar" size={24} color="#FFFFFF" />
        </Button>
      </button>
    </>
  );
};

export default StickyNavigationBar;