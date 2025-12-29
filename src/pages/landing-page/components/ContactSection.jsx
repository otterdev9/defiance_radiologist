import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const ContactSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    insuranceProvider: '',
    insuranceId: '',
    additionalNotes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const serviceOptions = [
    { value: 'mri', label: 'MRI Imaging' },
    { value: 'ct', label: 'CT Scan' },
    { value: 'xray', label: 'X-Ray Services' },
    { value: 'ultrasound', label: 'Ultrasound' },
    { value: 'mammography', label: 'Mammography' },
    { value: 'interventional', label: 'Interventional Radiology' }
  ];

  const timeOptions = [
    { value: 'morning', label: 'Morning (8:00 AM - 12:00 PM)' },
    { value: 'afternoon', label: 'Afternoon (12:00 PM - 4:00 PM)' },
    { value: 'evening', label: 'Evening (4:00 PM - 7:00 PM)' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData?.fullName?.trim()) newErrors.fullName = 'Full name is required';
      if (!formData?.phone?.trim()) newErrors.phone = 'Phone number is required';
      if (!formData?.email?.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Invalid email format';
    }

    if (step === 2) {
      if (!formData?.serviceType) newErrors.serviceType = 'Please select a service';
      if (!formData?.preferredDate) newErrors.preferredDate = 'Preferred date is required';
      if (!formData?.preferredTime) newErrors.preferredTime = 'Preferred time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateStep(3)) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="bg-gradient-to-br from-success/5 via-background to-primary/5 py-16 md:py-20 lg:py-24">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-success flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={48} color="#FFFFFF" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Appointment Request Received!
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Thank you for choosing Defiance Radiologist Associates. Our scheduling team will contact you within 24 hours to confirm your appointment.
            </p>
            <div className="card text-left mb-8">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">What Happens Next?</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Icon name="Phone" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm md:text-base font-medium text-foreground">Confirmation Call</p>
                    <p className="text-xs md:text-sm text-muted-foreground">We'll call you at {formData?.phone} to confirm your appointment details</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="FileText" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm md:text-base font-medium text-foreground">Preparation Instructions</p>
                    <p className="text-xs md:text-sm text-muted-foreground">You'll receive detailed preparation guidelines via email</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="MapPin" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm md:text-base font-medium text-foreground">Location Details</p>
                    <p className="text-xs md:text-sm text-muted-foreground">1234 Medical Center Drive, Defiance, OH 43512</p>
                  </div>
                </div>
              </div>
            </div>
            <Button
              variant="default"
              size="lg"
              className="cta-button cta-button-primary"
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                setFormData({
                  fullName: '',
                  phone: '',
                  email: '',
                  serviceType: '',
                  preferredDate: '',
                  preferredTime: '',
                  insuranceProvider: '',
                  insuranceId: '',
                  additionalNotes: ''
                });
              }}
            >
              Schedule Another Appointment
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-muted py-16 md:py-20 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Schedule Your Appointment</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Take the first step toward accurate diagnosis and peace of mind. Complete our simple 3-step form to request your appointment.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3]?.map((step) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      currentStep >= step
                        ? 'bg-primary text-white' :'bg-card border-2 border-border text-muted-foreground'
                    }`}>
                      {currentStep > step ? (
                        <Icon name="Check" size={20} color="#FFFFFF" />
                      ) : (
                        step
                      )}
                    </div>
                    <span className="text-xs md:text-sm font-medium text-muted-foreground mt-2 text-center">
                      {step === 1 ? 'Basic Info' : step === 2 ? 'Appointment' : 'Insurance'}
                    </span>
                  </div>
                  {step < 3 && (
                    <div className={`flex-1 h-0.5 mx-2 transition-all duration-300 ${
                      currentStep > step ? 'bg-primary' : 'bg-border'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form-container">
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="form-title">Contact Information</h3>
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData?.fullName}
                  onChange={(e) => handleInputChange('fullName', e?.target?.value)}
                  error={errors?.fullName}
                  required
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="(419) 555-0123"
                  value={formData?.phone}
                  onChange={(e) => handleInputChange('phone', e?.target?.value)}
                  error={errors?.phone}
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  error={errors?.email}
                  required
                />
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="form-title">Appointment Preferences</h3>
                <Select
                  label="Service Type"
                  placeholder="Select the service you need"
                  options={serviceOptions}
                  value={formData?.serviceType}
                  onChange={(value) => handleInputChange('serviceType', value)}
                  error={errors?.serviceType}
                  required
                />
                <Input
                  label="Preferred Date"
                  type="date"
                  value={formData?.preferredDate}
                  onChange={(e) => handleInputChange('preferredDate', e?.target?.value)}
                  error={errors?.preferredDate}
                  required
                  min={new Date()?.toISOString()?.split('T')?.[0]}
                />
                <Select
                  label="Preferred Time"
                  placeholder="Select your preferred time slot"
                  options={timeOptions}
                  value={formData?.preferredTime}
                  onChange={(value) => handleInputChange('preferredTime', value)}
                  error={errors?.preferredTime}
                  required
                />
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="form-title">Insurance Information</h3>
                <Input
                  label="Insurance Provider"
                  type="text"
                  placeholder="e.g., Blue Cross Blue Shield"
                  value={formData?.insuranceProvider}
                  onChange={(e) => handleInputChange('insuranceProvider', e?.target?.value)}
                  description="Leave blank if self-pay"
                />
                <Input
                  label="Insurance ID Number"
                  type="text"
                  placeholder="Enter your insurance ID"
                  value={formData?.insuranceId}
                  onChange={(e) => handleInputChange('insuranceId', e?.target?.value)}
                />
                <Input
                  label="Additional Notes"
                  type="text"
                  placeholder="Any special requirements or questions?"
                  value={formData?.additionalNotes}
                  onChange={(e) => handleInputChange('additionalNotes', e?.target?.value)}
                />
              </div>
            )}

            <div className="flex gap-4 mt-8">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={handlePrevious}
                  iconName="ChevronLeft"
                  iconPosition="left"
                  className="flex-1"
                >
                  Previous
                </Button>
              )}
              {currentStep < 3 ? (
                <Button
                  type="button"
                  variant="default"
                  size="lg"
                  onClick={handleNext}
                  iconName="ChevronRight"
                  iconPosition="right"
                  className="cta-button cta-button-primary flex-1"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  iconName="Send"
                  iconPosition="right"
                  className="cta-button cta-button-primary flex-1"
                >
                  Submit Request
                </Button>
              )}
            </div>
          </form>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card">
              <div className="flex items-start gap-3">
                <Icon name="Mail" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm md:text-base font-medium text-foreground mb-1">Email Us Directly</p>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">Prefer to send an email?</p>
                  <a href="mailto:semaanh@yahoo.Com" className="text-sm text-primary hover:underline">
                    <strong>semaanh@yahoo.Com</strong>
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-start gap-3">
                <Icon name="Clock" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm md:text-base font-medium text-foreground mb-1">Office Hours</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Mon-Fri: 8:00 AM - 7:00 PM</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;