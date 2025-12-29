import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceAreasSection = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const serviceAreas = [
    {
      id: 1,
      region: "Defiance County",
      cities: ["Defiance", "Hicksville", "Sherwood", "Ney"],
      facilities: 3,
      distance: "0-15 miles",
      icon: "MapPin",
      lat: 41.2845,
      lng: -84.3558
    },
    {
      id: 2,
      region: "Williams County",
      cities: ["Bryan", "Montpelier", "Edgerton", "Pioneer"],
      facilities: 2,
      distance: "15-25 miles",
      icon: "MapPin",
      lat: 41.4745,
      lng: -84.5522
    },
    {
      id: 3,
      region: "Fulton County",
      cities: ["Wauseon", "Archbold", "Delta", "Swanton"],
      facilities: 2,
      distance: "20-30 miles",
      icon: "MapPin",
      lat: 41.5495,
      lng: -84.1419
    },
    {
      id: 4,
      region: "Henry County",
      cities: ["Napoleon", "Deshler", "Holgate", "Liberty Center"],
      facilities: 1,
      distance: "25-35 miles",
      icon: "MapPin",
      lat: 41.3923,
      lng: -84.1252
    },
    {
      id: 5,
      region: "Paulding County",
      cities: ["Paulding", "Antwerp", "Payne", "Oakwood"],
      facilities: 1,
      distance: "20-30 miles",
      icon: "MapPin",
      lat: 41.1384,
      lng: -84.5816
    },
    {
      id: 6,
      region: "Lucas County",
      cities: ["Toledo", "Sylvania", "Maumee", "Oregon"],
      facilities: 4,
      distance: "35-45 miles",
      icon: "MapPin",
      lat: 41.6528,
      lng: -83.5379
    }
  ];

  return (
    <section className="bg-muted py-16 md:py-20 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Serving Northwest Ohio</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Convenient access to expert radiology services across multiple counties with partner facilities throughout the region
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {serviceAreas?.map((area) => (
                <div
                  key={area?.id}
                  className={`card cursor-pointer transition-all duration-300 ${
                    selectedRegion === area?.id ? 'ring-2 ring-primary shadow-lg' : ''
                  }`}
                  onClick={() => setSelectedRegion(selectedRegion === area?.id ? null : area?.id)}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={area?.icon} size={20} color="var(--color-primary)" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-1 truncate">
                        {area?.region}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {area?.distance}
                      </p>
                    </div>
                  </div>

                  <div className={`space-y-3 transition-all duration-300 ${
                    selectedRegion === area?.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="pt-3 border-t border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Building2" size={14} color="var(--color-success)" />
                        <span className="text-xs md:text-sm font-medium text-success">
                          {area?.facilities} Partner {area?.facilities === 1 ? 'Facility' : 'Facilities'}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {area?.cities?.map((city, index) => (
                          <span
                            key={index}
                            className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs md:text-sm text-primary font-medium">
                    <span>{selectedRegion === area?.id ? 'Hide Details' : 'View Details'}</span>
                    <Icon
                      name={selectedRegion === area?.id ? 'ChevronUp' : 'ChevronDown'}
                      size={16}
                      color="var(--color-primary)"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="card p-0 overflow-hidden h-[400px] md:h-[500px] lg:h-full">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Defiance Radiologist Associates Service Areas Map"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=41.2845,-84.3558&z=10&output=embed"
                className="w-full h-full"
              />
            </div>
            <div className="mt-4 p-4 bg-card rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm md:text-base text-foreground font-medium mb-1">
                    Main Office Location
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    1234 Medical Center Drive, Defiance, OH 43512
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">
                    Serving patients across 6 counties in Northwest Ohio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;