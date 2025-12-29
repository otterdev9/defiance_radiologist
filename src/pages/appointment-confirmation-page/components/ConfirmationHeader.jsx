import React from 'react';
import Icon from '../../../components/AppIcon';

const ConfirmationHeader = ({ confirmationNumber }) => {
  return (
    <section className="bg-gradient-to-br from-success/5 via-background to-primary/5 py-12 md:py-16">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-success flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Icon name="CheckCircle" size={48} color="#FFFFFF" />
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Appointment is Confirmed
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Thank you for choosing Defiance Radiologist Associates. We look forward to providing you with exceptional care.
          </p>
          
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card border-2 border-success/20 rounded-lg">
            <Icon name="Hash" size={20} color="var(--color-success)" />
            <div className="text-left">
              <div className="text-xs text-muted-foreground">Confirmation Number</div>
              <div className="text-lg font-bold text-foreground">{confirmationNumber}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmationHeader;