import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CredentialsSection = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const credentials = [
    {
      id: 1,
      year: "1995",
      title: "Medical Degree",
      institution: "American University of Beirut",
      description: "Graduated with honors from one of the Middle East's most prestigious medical schools, specializing in diagnostic radiology and medical imaging.",
      icon: "GraduationCap"
    },
    {
      id: 2,
      year: "1999",
      title: "Radiology Residency",
      institution: "Cleveland Clinic Foundation",
      description: "Completed comprehensive residency training in diagnostic radiology at one of America's top-ranked hospitals, gaining expertise in advanced imaging techniques.",
      icon: "Hospital"
    },
    {
      id: 3,
      year: "2001",
      title: "Board Certification",
      institution: "American Board of Radiology",
      description: "Achieved board certification demonstrating mastery of radiological principles, imaging interpretation, and patient care standards.",
      icon: "Award"
    },
    {
      id: 4,
      year: "2003",
      title: "Fellowship Training",
      institution: "University of Michigan",
      description: "Advanced fellowship training in interventional radiology and cross-sectional imaging, specializing in minimally invasive procedures.",
      icon: "Stethoscope"
    },
    {
      id: 5,
      year: "2005-Present",
      title: "Professor of Radiology",
      institution: "Defiance Radiologist Associates",
      description: "Leading radiology practice in Ohio, providing comprehensive diagnostic imaging services and mentoring next generation of radiologists.",
      icon: "UserCheck"
    }
  ];

  return (
    <section id="about" className="bg-muted py-16 md:py-20 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Distinguished Medical Background</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Over 25 years of excellence in diagnostic radiology with continuous commitment to advancing patient care through cutting-edge imaging technology
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {credentials?.map((item, index) => (
              <div
                key={item?.id}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="card hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={item?.icon} size={24} color="var(--color-primary)" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm md:text-base font-bold text-primary mb-1">{item?.year}</div>
                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{item?.title}</h3>
                        <p className="text-sm md:text-base text-secondary font-medium">{item?.institution}</p>
                      </div>
                    </div>

                    <div className={`overflow-hidden transition-all duration-300 ${
                      expandedItem === item?.id ? 'max-h-96' : 'max-h-0'
                    }`}>
                      <p className="text-sm md:text-base text-muted-foreground pt-4 border-t border-border">
                        {item?.description}
                      </p>
                    </div>

                    <button
                      onClick={() => setExpandedItem(expandedItem === item?.id ? null : item?.id)}
                      className="mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                    >
                      {expandedItem === item?.id ? 'Show Less' : 'Learn More'}
                      <Icon
                        name={expandedItem === item?.id ? 'ChevronUp' : 'ChevronDown'}
                        size={16}
                        color="var(--color-primary)"
                      />
                    </button>
                  </div>
                </div>

                <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background absolute left-1/2 transform -translate-x-1/2 top-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;