import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onScheduleClick, onServicesClick }) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-24 md:pt-28 lg:pt-32">
      <div className="section-container">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground leading-tight">
              Ohio's Leading Radiology Expert
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-primary">
              DR Hassan Semaan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/images-1766884053858.jpg"
                  alt="Professional headshot of DR Hassan Semaan wearing white medical lab coat"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-top bg-white" />
              </div>
              
              <div className="mt-4 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">DR Hassan Semaan</h3>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center space-y-6 md:space-y-8">
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground text-center">
                Accurate Diagnoses, Personalized Care, Trusted Results
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="cta-button"
                  iconName="Activity"
                  iconPosition="left"
                  onClick={onServicesClick}>

                  View Our Services
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-border w-full">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">25+</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">50K+</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">Successful Diagnoses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">98%</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">Patient Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;