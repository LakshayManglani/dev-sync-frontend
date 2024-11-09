import React from 'react';

export interface CounterProps
  extends React.OutputHTMLAttributes<HTMLOutputElement> {
  count: number;
  unit?: string;
  className?: string;
}
