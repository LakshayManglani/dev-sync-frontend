import React from 'react';
import { CounterProps } from '../';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'large' | 'medium' | 'small';
  status?: 'simple' | 'ghost' | 'rest' | 'selected' | 'disabled';
  border?: 'full' | 'small';
  leftIcon?: React.ReactNode;
  label?: string | React.ReactNode;
  counter?: CounterProps;
  rightIcon?: React.ReactNode;
}
