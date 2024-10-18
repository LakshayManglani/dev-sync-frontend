import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'large' | 'medium' | 'small';
  status?: 'simple' | 'ghost' | 'rest' | 'selected' | 'disabled';
  border?: 'full' | 'small';
  leftIcon?: React.ReactNode;
  label?: string | React.ReactNode;
  count?: number;
  rightIcon?: React.ReactNode;
}
