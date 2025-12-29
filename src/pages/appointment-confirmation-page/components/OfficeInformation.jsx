import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OfficeInformation = () => {
  const officeDetails = {
    address: '1200 Medical Center Drive, Defiance, OH 43512',
    phone: '(419) 555-0100',
    email: 'semaanh@yahoo.com',
    hours: 'Monday - Friday: 8:00 AM - 7:00 PM',
    parking: 'Free parking available in the main lot',
    accessibility: 'Wheelchair accessible entrance and facilities'
  };

  const handleDirections = () => {
    const address = encodeURIComponent(officeDetails?.address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank');
  };

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-8">Office Location & Information</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Map Section */}
            <div className="card p-0 overflow-hidden">
              <div className="relative h-64 md:h-80 bg-muted">
                <iframe
                  title="Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841!2d-84.3558!3d41.2845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzA0LjIiTiA4NMKwMjEnMjAuOSJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-4">
                <Button
                  variant="default"
                  fullWidth
                  className="cta-button cta-button-primary"
                  iconName="Navigation"
                  iconPosition="left"
                  onClick={handleDirections}
                >
                  Get Turn-by-Turn Directions
                </Button>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} color="var(--color-primary)" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">Address</div>
                    <div className="text-base font-semibold text-foreground">{officeDetails?.address}</div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} color="var(--color-secondary)" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">Phone</div>
                    <a href={`tel:${officeDetails?.phone}`} className="text-base font-semibold text-foreground hover:text-primary transition-colors">
                      {officeDetails?.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} color="var(--color-accent)" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <a href={`mailto:${officeDetails?.email}`} className="text-base font-semibold text-foreground hover:text-primary transition-colors">
                      {officeDetails?.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} color="var(--color-success)" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">Office Hours</div>
                    <div className="text-base font-semibold text-foreground">{officeDetails?.hours}</div>
                  </div>
                </div>
              </div>

              <div className="card bg-primary/5 border-primary/20">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Car" size={18} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{officeDetails?.parking}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Accessibility" size={18} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{officeDetails?.accessibility}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeInformation;