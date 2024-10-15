export interface CounterProps {
  count: number;
  status?: 'rest' | 'selected-invert' | 'disabled';
  className?: string;
  ariaLabel?: string;
}
