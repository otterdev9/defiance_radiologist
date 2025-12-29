import React from 'react';
import Icon from '../../../components/AppIcon';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();

  const quickLinks = [
    { label: 'About Professor Semaan', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Patient Stories', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const services = [
    { label: 'MRI Imaging', href: '#services' },
    { label: 'CT Scans', href: '#services' },
    { label: 'X-Ray Services', href: '#services' },
    { label: 'Ultrasound', href: '#services' },
    { label: 'Mammography', href: '#services' },
    { label: 'Interventional Radiology', href: '#services' }
  ];

  const contactInfo = [
    { icon: 'MapPin', text: '1234 Medical Center Drive, Defiance, OH 43512' },
    { icon: 'Phone', text: '(419) 555-0123', href: 'tel:4195550123' },
    { icon: 'Mail', text: 'semaanh@yahoo.com', href: 'mailto:semaanh@yahoo.com' },
    { icon: 'Clock', text: 'Mon-Fri: 8:00 AM - 7:00 PM, Sat: 9:00 AM - 2:00 PM' }
  ];

  const certifications = [
    { icon: 'Award', text: 'American Board of Radiology Certified' },
    { icon: 'Shield', text: 'Ohio Medical Board Licensed' },
    { icon: 'CheckCircle', text: 'HIPAA Compliant Facility' }
  ];

  return (
    <footer className="bg-primary text-white py-12 md:py-16 lg:py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                <Icon name="Activity" size={24} color="#FFFFFF" />
              </div>
              <span className="text-xl font-bold">Defiance Radiologist</span>
            </div>
            <p className="text-sm text-white/80 mb-6">
              Leading radiology expertise in Ohio with Professor Hassan Semaan's distinguished medical background, providing accurate diagnostic imaging services.
            </p>
            <div className="space-y-3">
              {certifications?.map((cert, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Icon name={cert?.icon} size={16} color="#FFFFFF" className="flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-white/80">{cert?.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks?.map((link, index) => (
                <li key={index}>
                  <a
                    href={link?.href}
                    className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Icon name="ChevronRight" size={14} color="#FFFFFF" />
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services?.map((service, index) => (
                <li key={index}>
                  <a
                    href={service?.href}
                    className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Icon name="ChevronRight" size={14} color="#FFFFFF" />
                    {service?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              {contactInfo?.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon name={info?.icon} size={18} color="#FFFFFF" className="flex-shrink-0 mt-0.5" />
                  {info?.href ? (
                    <a
                      href={info?.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {info?.text}
                    </a>
                  ) : (
                    <span className="text-sm text-white/80">{info?.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/80 text-center md:text-left">
              &copy; {currentYear} Defiance Radiologist Associates. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;