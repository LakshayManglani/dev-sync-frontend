export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'large' | 'medium' | 'small';
  status?: 'simple' | 'ghost' | 'rest' | 'selected' | 'disabled';
  border?: 'full' | 'small';
  leftIcon?: React.ReactNode;
  label?: string;
  count?: number;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
}
