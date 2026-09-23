import type { ReactElement } from 'react';


interface BenefitItemProps {
  icon: 'fresh' | 'vitamin' | 'organic';
  label: string;
  description: string;
}

const ICONS: Record<BenefitItemProps['icon'], ReactElement> = {
  fresh: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21c-5-3-8-7-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 4-3 8-8 11z" />
    </svg>
  ),
  vitamin: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M7 12h10" />
    </svg>
  ),
  organic: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 3v8a6 6 0 0 0 12 0V3" />
      <path d="M12 21v-6" />
    </svg>
  ),
};

const BenefitItem = ({ icon, label, description }: BenefitItemProps) => {
  return (
    <div className="benefit-item">
      <span className="benefit-item__icon">{ICONS[icon]}</span>
      <h4>{label}</h4>
      <p>{description}</p>
    </div>
  );
};

export default BenefitItem;