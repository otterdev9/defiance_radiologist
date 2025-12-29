import React from 'react';
import StickyNavigationBar from '../../components/ui/StickyNavigationBar';
import ConfirmationHeader from './components/ConfirmationHeader';
import AppointmentDetails from './components/AppointmentDetails';
import PreparationInstructions from './components/PreparationInstructions';
import OfficeInformation from './components/OfficeInformation';
import InsuranceVerification from './components/InsuranceVerification';
import ActionButtons from './components/ActionButtons';
import FooterSection from '../landing-page/components/FooterSection';

const AppointmentConfirmationPage = () => {
  // Mock appointment data - in real app, this would come from booking state/API
  const appointmentData = {
    confirmationNumber: 'DRA-2025-' + Math.floor(Math.random() * 10000)?.toString()?.padStart(4, '0'),
    radiologist: 'Professor Hassan Semaan',
    serviceType: 'MRI Imaging',
    date: '2025-01-15',
    time: '10:00 AM',
    duration: '45 minutes',
    patientName: 'John Doe',
    patientEmail: 'john.doe@example.com',
    patientPhone: '(419) 555-0123',
    insuranceProvider: 'Blue Cross Blue Shield',
    insuranceStatus: 'Verified',
    estimatedCost: '$150'
  };

  return (
    <div className="min-h-screen bg-background">
      <StickyNavigationBar />
      <div className="pt-24 md:pt-28 lg:pt-32">
        <ConfirmationHeader confirmationNumber={appointmentData?.confirmationNumber} />
        
        <AppointmentDetails appointment={appointmentData} />
        
        <PreparationInstructions serviceType={appointmentData?.serviceType} />
        
        <OfficeInformation />
        
        <InsuranceVerification 
          provider={appointmentData?.insuranceProvider}
          status={appointmentData?.insuranceStatus}
          estimatedCost={appointmentData?.estimatedCost}
        />
        
        <ActionButtons appointment={appointmentData} />
      </div>
      <FooterSection />
    </div>
  );
};

export default AppointmentConfirmationPage;