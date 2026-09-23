import type { ReactNode } from 'react';


interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const Button = ({ children, variant = 'primary', onClick, type = 'button' }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`btn btn--${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;