import React from 'react';

export interface CounterProps
  extends React.OutputHTMLAttributes<HTMLOutputElement> {
  count: number;
  className?: string;
}
