import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ActionButtons = ({ appointment }) => {
  const navigate = useNavigate();

  const handleAddToCalendar = () => {
    // Create ICS calendar event
    const event = {
      title: `${appointment?.serviceType} - Defiance Radiologist Associates`,
      description: `Appointment with ${appointment?.radiologist}. Confirmation: ${appointment?.confirmationNumber}`,
      location: '1200 Medical Center Drive, Defiance, OH 43512',
      startTime: new Date(appointment?.date + ' ' + appointment?.time),
      duration: appointment?.duration
    };
    
    // In real app, this would generate and download an ICS file
    alert('Calendar event would be created here with automatic reminders');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleContactOffice = () => {
    window.location.href = 'mailto:semaanh@yahoo.com?subject=Appointment Inquiry - ' + appointment?.confirmationNumber;
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Need to Make Changes?</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Use the options below to manage your appointment or contact our office
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button
                variant="default"
                fullWidth
                className="cta-button cta-button-primary"
                iconName="Calendar"
                iconPosition="left"
                onClick={handleAddToCalendar}
              >
                Add to Calendar
              </Button>

              <Button
                variant="outline"
                fullWidth
                className="cta-button"
                iconName="Printer"
                iconPosition="left"
                onClick={handlePrint}
              >
                Print Confirmation
              </Button>

              <Button
                variant="outline"
                fullWidth
                className="cta-button"
                iconName="Mail"
                iconPosition="left"
                onClick={handleContactOffice}
              >
                Contact Office
              </Button>

              <Button
                variant="secondary"
                fullWidth
                className="cta-button"
                iconName="Home"
                iconPosition="left"
                onClick={handleBackToHome}
              >
                Back to Home
              </Button>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="card mt-6 bg-error/5 border-error/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-error flex items-center justify-center flex-shrink-0">
                <Icon name="AlertCircle" size={24} color="#FFFFFF" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">Emergency or Urgent Changes?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  If you need to cancel or reschedule within 24 hours of your appointment, please call us immediately.
                </p>
                <a href="tel:(419)555-0100" className="inline-flex items-center gap-2 text-error font-semibold hover:underline">
                  <Icon name="Phone" size={18} color="var(--color-error)" />
                  <span>(419) 555-0100</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionButtons;