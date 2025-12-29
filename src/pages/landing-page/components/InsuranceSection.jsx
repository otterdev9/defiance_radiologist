import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';



const InsuranceSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const insuranceProviders = [
    { id: 1, name: "Medicare", status: "Accepted", icon: "Shield" },
    { id: 2, name: "Medicaid", status: "Accepted", icon: "Shield" },
    { id: 3, name: "Blue Cross Blue Shield", status: "Accepted", icon: "Shield" },
    { id: 4, name: "Aetna", status: "Accepted", icon: "Shield" },
    { id: 5, name: "Cigna", status: "Accepted", icon: "Shield" },
    { id: 6, name: "UnitedHealthcare", status: "Accepted", icon: "Shield" },
    { id: 7, name: "Humana", status: "Accepted", icon: "Shield" },
    { id: 8, name: "Anthem", status: "Accepted", icon: "Shield" },
    { id: 9, name: "Kaiser Permanente", status: "Accepted", icon: "Shield" },
    { id: 10, name: "Tricare", status: "Accepted", icon: "Shield" },
    { id: 11, name: "Veterans Affairs", status: "Accepted", icon: "Shield" },
    { id: 12, name: "Molina Healthcare", status: "Accepted", icon: "Shield" }
  ];

  const filteredProviders = insuranceProviders?.filter(provider =>
    provider?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  return (
    <section className="bg-background py-16 md:py-20 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Insurance Coverage</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We accept most major insurance plans to make quality radiology services accessible and affordable
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Input
              type="search"
              placeholder="Search for your insurance provider..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            {filteredProviders?.map((provider) => (
              <div
                key={provider?.id}
                className="card group hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0 group-hover:bg-success group-hover:scale-110 transition-all duration-300">
                    <Icon
                      name={provider?.icon}
                      size={20}
                      color="var(--color-success)"
                      className="group-hover:text-white"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-base font-bold text-foreground mb-1 truncate">
                      {provider?.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Icon name="CheckCircle" size={14} color="var(--color-success)" />
                      <span className="text-xs md:text-sm text-success font-medium">
                        {provider?.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProviders?.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
              <p className="text-base md:text-lg text-muted-foreground">
                No insurance providers found matching "{searchTerm}"
              </p>
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <Icon name="DollarSign" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
              <p className="text-xs md:text-sm font-medium text-foreground">Flexible Payment Plans</p>
            </div>
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <Icon name="FileText" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
              <p className="text-xs md:text-sm font-medium text-foreground">Pre-Authorization Assistance</p>
            </div>
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <Icon name="CreditCard" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
              <p className="text-xs md:text-sm font-medium text-foreground">Self-Pay Discounts Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;