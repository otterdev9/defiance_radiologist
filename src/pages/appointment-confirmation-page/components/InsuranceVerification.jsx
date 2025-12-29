import React from 'react';
import Icon from '../../../components/AppIcon';

const InsuranceVerification = ({ provider, status, estimatedCost }) => {
  const requiredDocuments = [
    'Valid photo ID (Driver\'s License or State ID)',
    'Current insurance card (front and back)',
    'Referral form from your physician (if required)',
    'List of current medications and allergies'
  ];

  return (
    <section className="bg-gradient-to-br from-success/5 via-background to-primary/5 py-12 md:py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-8">Insurance & Payment Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Insurance Status */}
            <div className="card">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" size={24} color="var(--color-success)" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-1">Insurance Provider</div>
                  <div className="text-lg font-bold text-foreground">{provider}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-success/10 rounded-lg">
                <Icon name="CheckCircle" size={18} color="var(--color-success)" />
                <span className="text-sm font-semibold text-success">Coverage {status}</span>
              </div>
            </div>

            {/* Estimated Cost */}
            <div className="card">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="DollarSign" size={24} color="var(--color-primary)" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-1">Estimated Patient Responsibility</div>
                  <div className="text-lg font-bold text-foreground">{estimatedCost}</div>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground">
                This is an estimate based on your insurance benefits. Final costs may vary.
              </p>
            </div>
          </div>

          {/* Required Documents */}
          <div className="card mt-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center flex-shrink-0">
                <Icon name="FileText" size={24} color="var(--color-warning)" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Required Documentation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Please bring the following items to your appointment:
                </p>
                <ul className="space-y-2">
                  {requiredDocuments?.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="CheckSquare" size={18} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="card mt-6 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <Icon name="CreditCard" size={24} color="#FFFFFF" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">Payment Options Available</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  We accept cash, credit cards, debit cards, and offer flexible payment plans for qualifying patients.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-card rounded-full text-xs font-medium text-foreground border border-border">Cash</span>
                  <span className="px-3 py-1 bg-card rounded-full text-xs font-medium text-foreground border border-border">Credit Card</span>
                  <span className="px-3 py-1 bg-card rounded-full text-xs font-medium text-foreground border border-border">Debit Card</span>
                  <span className="px-3 py-1 bg-card rounded-full text-xs font-medium text-foreground border border-border">Payment Plans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceVerification;