import styled, { css, keyframes } from 'styled-components';
import { CounterProps } from './types';

const statusStyles = {
  rest: css`
    background-color: var(--color-control-rest);
    color: var(--color-text-primary);
  `,
  'selected-invert': css`
    background-color: var(--color-control-selected-invert);
    border-color: var(--color-control-separator-invert);
    color: var(--color-text-primary-invert);
  `,
  disabled: css`
    background-color: var(--color-control-disabled);
    color: var(--color-text-tertiary);
  `,
};

const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledCounter = styled.output<{
  $status: Exclude<CounterProps['status'], undefined>;
  $animate: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 1rem;
  padding: 0rem 0.375rem;
  border: 1px solid var(--color-control-separator);
  border-radius: 1rem;

  transition: all 0.15s ease;

  ${({ $status }) => statusStyles[$status]}

  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${scaleAnimation} 0.3s ease-in-out;
    `}
`;
