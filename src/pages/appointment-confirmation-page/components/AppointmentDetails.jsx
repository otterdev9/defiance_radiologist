import React from 'react';
import Icon from '../../../components/AppIcon';

const AppointmentDetails = ({ appointment }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const detailItems = [
    {
      icon: 'User',
      label: 'Radiologist',
      value: appointment?.radiologist,
      color: 'var(--color-primary)'
    },
    {
      icon: 'Activity',
      label: 'Service Type',
      value: appointment?.serviceType,
      color: 'var(--color-secondary)'
    },
    {
      icon: 'Calendar',
      label: 'Date',
      value: formatDate(appointment?.date),
      color: 'var(--color-accent)'
    },
    {
      icon: 'Clock',
      label: 'Time',
      value: appointment?.time,
      color: 'var(--color-success)'
    },
    {
      icon: 'Timer',
      label: 'Estimated Duration',
      value: appointment?.duration,
      color: 'var(--color-warning)'
    }
  ];

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-8">Appointment Details</h2>
          
          <div className="card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {detailItems?.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={item?.icon} size={24} color={item?.color} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">{item?.label}</div>
                    <div className="text-base md:text-lg font-bold text-foreground">{item?.value}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">
                  Please arrive 15 minutes early to complete any necessary paperwork. If you need to reschedule or have questions, contact us at <span className="font-semibold text-foreground">(419) 555-0100</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentDetails;