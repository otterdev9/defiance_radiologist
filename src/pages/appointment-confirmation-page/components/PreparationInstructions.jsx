import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PreparationInstructions = ({ serviceType }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Instructions vary by service type
  const getInstructions = () => {
    const baseInstructions = [
      {
        id: 'fasting',
        title: 'Fasting Guidelines',
        icon: 'Coffee',
        items: [
          'No food or drink 4 hours before your appointment',
          'You may take regular medications with small sips of water',
          'Avoid caffeine 12 hours before the procedure',
          'Clear liquids are acceptable up to 2 hours before'
        ]
      },
      {
        id: 'medications',
        title: 'Medication Instructions',
        icon: 'Pill',
        items: [
          'Bring a list of all current medications',
          'Continue taking prescribed medications unless instructed otherwise',
          'Inform us of any blood thinners or diabetes medications',
          'Notify staff of any allergies or previous reactions'
        ]
      },
      {
        id: 'clothing',
        title: 'What to Wear',
        icon: 'Shirt',
        items: [
          'Wear comfortable, loose-fitting clothing',
          'Avoid clothing with metal zippers, buttons, or snaps',
          'Remove all jewelry and accessories before arrival',
          'You may be provided with a gown if necessary'
        ]
      },
      {
        id: 'bring',
        title: 'Items to Bring',
        icon: 'Briefcase',
        items: [
          'Photo ID and insurance card',
          'List of current medications and dosages',
          'Previous imaging results if available',
          'Completed medical history forms (if sent in advance)'
        ]
      }
    ];

    return baseInstructions;
  };

  const instructions = getInstructions();

  const handleDownloadPDF = () => {
    // In real app, this would generate/download a PDF
    alert('Preparation checklist PDF would be downloaded here');
  };

  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12 md:py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-title mb-4">Preparation Instructions</h2>
            <p className="section-subtitle">
              Follow these guidelines to ensure your {serviceType} appointment goes smoothly
            </p>
          </div>

          <div className="space-y-4 mb-6">
            {instructions?.map((section) => (
              <div key={section?.id} className="card">
                <button
                  onClick={() => toggleSection(section?.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={section?.icon} size={24} color="var(--color-primary)" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">{section?.title}</h3>
                  </div>
                  <Icon 
                    name={expandedSection === section?.id ? 'ChevronUp' : 'ChevronDown'} 
                    size={24} 
                    color="var(--color-muted-foreground)" 
                  />
                </button>

                {expandedSection === section?.id && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <ul className="space-y-3">
                      {section?.items?.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Icon name="CheckCircle" size={18} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                          <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              variant="outline"
              className="cta-button"
              iconName="Download"
              iconPosition="left"
              onClick={handleDownloadPDF}
            >
              Download Preparation Checklist (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreparationInstructions;