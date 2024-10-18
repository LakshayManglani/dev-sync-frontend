import { ButtonProps } from '../button';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  border?: 'full' | 'small';
  state?: 'rest' | 'disabled';
  label?: string | React.ReactNode;
  leftButton?: ButtonProps;
  rightButton?: ButtonProps;
  validation?: {
    state: 'success' | 'error';
    message?: string;
  };
}
