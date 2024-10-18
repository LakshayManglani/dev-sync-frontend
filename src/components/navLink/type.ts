import React from 'react';
import { NavLinkProps as RouterNavLinkProps } from 'react-router-dom';

export interface NavLinkProps extends RouterNavLinkProps {
  size?: 'large' | 'medium' | 'small';
  status?: 'simple' | 'rest';
  border?: 'full' | 'small';
  leftIcon?: React.ReactNode;
  label?: string | React.ReactNode;
  rightIcon?: React.ReactNode;
}
