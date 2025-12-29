import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';



const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      name: "MRI Imaging",
      icon: "Scan",
      description: "Advanced magnetic resonance imaging for detailed soft tissue visualization",
      details: "High-field MRI technology providing exceptional image quality for neurological, musculoskeletal, and abdominal imaging",
      availability: "Same-day appointments available",
      duration: "30-60 minutes"
    },
    {
      id: 2,
      name: "CT Scans",
      icon: "CircleDot",
      description: "Fast, accurate computed tomography for comprehensive body imaging",
      details: "Low-dose CT protocols ensuring patient safety while delivering diagnostic-quality images for trauma, cancer screening, and surgical planning",
      availability: "24/7 emergency access",
      duration: "10-30 minutes"
    },
    {
      id: 3,
      name: "X-Ray Services",
      icon: "Zap",
      description: "Digital radiography for bone and chest examinations",
      details: "State-of-the-art digital X-ray systems providing immediate results for fractures, infections, and pulmonary conditions",
      availability: "Walk-ins welcome",
      duration: "5-15 minutes"
    },
    {
      id: 4,
      name: "Ultrasound",
      icon: "Radio",
      description: "Safe, non-invasive imaging for obstetric and abdominal studies",
      details: "Real-time ultrasound imaging for prenatal care, vascular studies, and organ assessment without radiation exposure",
      availability: "Next-day scheduling",
      duration: "20-45 minutes"
    },
    {
      id: 5,
      name: "Mammography",
      icon: "Heart",
      description: "Digital breast imaging for early cancer detection",
      details: "3D mammography technology improving cancer detection rates while reducing false positives and callback rates",
      availability: "Flexible scheduling",
      duration: "15-30 minutes"
    },
    {
      id: 6,
      name: "Interventional Radiology",
      icon: "Activity",
      description: "Minimally invasive image-guided procedures",
      details: "Advanced catheter-based treatments for vascular conditions, tumor ablation, and pain management with faster recovery times",
      availability: "Consultation required",
      duration: "1-3 hours"
    }
  ];

  return (
    <section id="services" className="bg-background py-16 md:py-20 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Comprehensive Radiology Services</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            State-of-the-art diagnostic imaging technology combined with expert interpretation for accurate, timely results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services?.map((service) => (
            <div
              key={service?.id}
              className="card group cursor-pointer relative overflow-hidden"
              onMouseEnter={() => setHoveredService(service?.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon
                    name={service?.icon}
                    size={28}
                    color={hoveredService === service?.id ? '#FFFFFF' : 'var(--color-primary)'}
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service?.name}
                </h3>

                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  {service?.description}
                </p>

                <div className={`space-y-3 transition-all duration-300 ${
                  hoveredService === service?.id ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
                } overflow-hidden`}>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-foreground mb-4">{service?.details}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Clock" size={16} color="var(--color-success)" />
                        <span className="text-muted-foreground">{service?.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Calendar" size={16} color="var(--color-success)" />
                        <span className="text-success font-medium">{service?.availability}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 transition-opacity duration-300 ${
                hoveredService === service?.id ? 'opacity-100' : 'opacity-0'
              }`} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            All services performed with latest technology and interpreted by board-certified radiologists
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;