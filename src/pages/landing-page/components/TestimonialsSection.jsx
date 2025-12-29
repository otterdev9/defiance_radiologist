import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
  {
    id: 1,
    name: "Margaret Thompson",
    age: 62,
    location: "Defiance, OH",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_178dfb429-1766580283796.png",
    avatarAlt: "Smiling elderly woman with short gray hair wearing blue cardigan and pearl necklace in bright medical office setting",
    rating: 5,
    date: "December 2024",
    service: "MRI Imaging",
    quote: "DR Semaan's expertise gave me peace of mind during a very stressful time. His thorough explanation of my MRI results and compassionate approach made all the difference.",
    outcome: "Early detection led to successful treatment"
  },
  {
    id: 2,
    name: "Robert Martinez",
    age: 58,
    location: "Toledo, OH",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1fbb80d51-1763296048066.png",
    avatarAlt: "Professional middle-aged Hispanic man with salt and pepper beard wearing navy blue polo shirt smiling warmly in medical facility",
    rating: 5,
    date: "November 2024",
    service: "CT Scan",
    quote: "After visiting three other facilities, DR Semaan was the first to accurately diagnose my condition. His attention to detail and years of experience are truly remarkable.",
    outcome: "Accurate diagnosis after months of uncertainty"
  },
  {
    id: 3,
    name: "Linda Chen",
    age: 45,
    location: "Bryan, OH",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_171517b36-1763295397686.png",
    avatarAlt: "Asian woman with long black hair wearing white blouse and glasses smiling confidently in modern healthcare environment",
    rating: 5,
    date: "October 2024",
    service: "Mammography",
    quote: "The 3D mammography technology and DR Semaan's careful review detected my breast cancer at stage 1. I'm forever grateful for the life-saving care I received.",
    outcome: "Life-saving early cancer detection"
  },
  {
    id: 4,
    name: "James Wilson",
    age: 71,
    location: "Napoleon, OH",
    avatar: "https://images.unsplash.com/flagged/photo-1571893937275-39e2586d074a",
    avatarAlt: "Elderly Caucasian man with white hair and mustache wearing plaid shirt smiling warmly in comfortable medical waiting area",
    rating: 5,
    date: "September 2024",
    service: "Interventional Radiology",
    quote: "The minimally invasive procedure performed by DR Semaan eliminated my chronic pain without major surgery. Recovery was quick and the results exceeded my expectations.",
    outcome: "Pain-free after years of suffering"
  }];


  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <section id="testimonials" className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-20 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Patient Success Stories</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Real experiences from patients who trusted DR Semaan with their diagnostic imaging needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 opacity-5">
              <Icon name="Quote" size={128} color="var(--color-primary)" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="relative">
                    <Image
                      src={currentTestimonial?.avatar}
                      alt={currentTestimonial?.avatarAlt}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary/20" />

                    <div className="absolute -bottom-2 -right-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-success flex items-center justify-center border-4 border-card">
                      <Icon name="CheckCircle" size={20} color="#FFFFFF" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                    {[...Array(currentTestimonial?.rating)]?.map((_, i) =>
                    <Icon key={i} name="Star" size={20} color="#F59E0B" strokeWidth={0} className="fill-current" />
                    )}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                    {currentTestimonial?.name}, {currentTestimonial?.age}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-2">
                    {currentTestimonial?.location}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                    <Icon name="Activity" size={14} color="var(--color-primary)" />
                    <span className="text-xs md:text-sm font-medium text-primary">
                      {currentTestimonial?.service}
                    </span>
                  </div>
                </div>
              </div>

              <blockquote className="testimonial-text text-base md:text-lg mb-6">
                "{currentTestimonial?.quote}"
              </blockquote>

              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={18} color="var(--color-success)" />
                  <span className="text-sm md:text-base font-medium text-success">
                    {currentTestimonial?.outcome}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-muted-foreground">
                  {currentTestimonial?.date}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border hover:bg-primary hover:border-primary transition-all duration-300 flex items-center justify-center group"
              aria-label="Previous testimonial">

              <Icon name="ChevronLeft" size={20} color="var(--color-foreground)" className="group-hover:text-white" />
            </button>

            <div className="flex gap-2">
              {testimonials?.map((_, index) =>
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/50'}`
                }
                aria-label={`Go to testimonial ${index + 1}`} />

              )}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border hover:bg-primary hover:border-primary transition-all duration-300 flex items-center justify-center group"
              aria-label="Next testimonial">

              <Icon name="ChevronRight" size={20} color="var(--color-foreground)" className="group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;