import { useEffect, useState } from 'react';
import { ButtonProps } from './types';
import {
  colorBaseBlue,
  colorBaseRed,
  colorBaseTransparent,
  colorControlDisabled,
  colorControlHover,
  colorControlRest,
  colorControlSelected,
  colorControlSeparator,
  colorTextPrimary,
  colorTextPrimaryInvert,
  colorTextTertiary,
} from '../../variables';
import chroma from 'chroma-js';
import styles from './Button.module.scss';

function Button({
  size = 'small',
  border = 'full',
  leftIcon,
  status = 'ghost',
  variant = 'secondary',
  onClick,
}: Readonly<ButtonProps>) {
  const [isHovering, setIsHovering] = useState(false);
  const [isHolding, setIsHolding] = useState(false);

  useEffect(() => {
    const handleMouseUp = () => {
      if (isHolding) {
        setIsHolding(false);
      }
    };

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isHolding]);

  const buttonStatus = (() => {
    if (status === 'disabled') return 'disabled';
    if (isHolding || status === 'selected') return 'selected';
    if (isHovering) return 'hover';
    return status;
  })();

  const padding = (() => {
    if (size === 'large') return '0.75rem';
    if (size === 'medium') return '0.5rem';

    // small
    return '0.375rem';
  })();

  const gap = (() => {
    if (size === 'large') return '0.5rem';
    if (size === 'medium') return '0.5rem';

    // small
    return '0.375rem';
  })();

  const borderRadius = (() => {
    if (border === 'full') return '99rem';

    // small
    return '0.25rem';
  })();

  const color = (() => {
    if (variant === 'primary') return colorBaseBlue;
    if (variant === 'danger') return colorBaseRed;
  })();

  const borderColor = (() => {
    return color ?? colorControlSeparator;
  })();

  const background = (() => {
    const baseColor = color ?? colorBaseTransparent;

    if (buttonStatus === 'disabled') {
      return `linear-gradient(0deg, ${colorControlDisabled}, ${colorControlDisabled}), ${chroma(baseColor).alpha(0.3).css()}`;
    }

    if (buttonStatus === 'hover') {
      return `linear-gradient(0deg, ${colorControlHover}, ${colorControlHover}), ${baseColor}`;
    }

    if (buttonStatus === 'selected') {
      return colorControlSelected;
    }

    if (buttonStatus === 'rest') {
      return `linear-gradient(0deg, ${colorControlRest}, ${colorControlRest}), ${baseColor}`;
    }
  })();

  const textColor = (() => {
    if (buttonStatus === 'disabled') return colorTextTertiary;

    if (buttonStatus === 'selected') return colorTextPrimaryInvert;

    if (buttonStatus === 'rest' || buttonStatus === 'hover')
      return colorTextPrimary;

    return color;
  })();

  return (
    <button
      disabled={buttonStatus === 'disabled'}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseDown={() => setIsHolding(true)}
      onMouseUp={() => setIsHolding(false)}
      onClick={onClick}
      style={{
        cursor: buttonStatus === 'disabled' ? 'not-allowed' : 'pointer',
        boxShadow:
          buttonStatus === 'ghost' ? `inset 0 0 0 1px ${borderColor}` : 'none',
        margin: '0.25rem',
        borderRadius: borderRadius,
        padding: padding,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: gap,
        background: background,
        color: textColor,
      }}
      className={styles.button}
    >
      {leftIcon}
      Button
    </button>
  );
}

export default Button;
