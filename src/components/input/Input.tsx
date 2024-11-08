import React, { useCallback, useState } from 'react';
import { InputProps } from './types';
import styles from './Input.module.scss';
import clsx from 'clsx';
import { Button } from '..';
import {
  CheckmarkCircle16Filled,
  Eye16Filled,
  EyeOff16Filled,
  Warning16Filled,
} from '@fluentui/react-icons';
import { camelCase } from 'change-case';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      leftButton,
      rightButton,
      border = 'small',
      state = 'rest',
      validation,
      disabled,
      className,
      id = typeof label === 'string' ? camelCase(label) : 'input',
      name,
      style,
      type = 'text',
      required,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordType = type === 'password';
    const inputType = isPasswordType && showPassword ? 'text' : type;

    const handleTogglePassword = useCallback(() => {
      setShowPassword((prev) => !prev);
    }, []);

    const renderRightButton = () => {
      if (!rightButton && isPasswordType) {
        return {
          leftIcon: showPassword ? <EyeOff16Filled /> : <Eye16Filled />,
          onClick: handleTogglePassword,
        };
      }
      return rightButton;
    };

    const currentState = disabled ? 'disabled' : state;
    const finalRightButton = renderRightButton();
    const validationMessage = validation?.message ?? validation?.state;

    return (
      <div className={clsx(styles.wrapper, className)} style={style}>
        {label && (
          <label className="body-strong" htmlFor={id}>
            {label}
            {required && ' *'}
          </label>
        )}

        <div
          className={clsx(
            styles.inputContainer,
            styles[`state-${currentState}`],
            validation && styles[`validation-state-${validation.state}`],
            styles[`border-size-${border}`]
          )}
        >
          {leftButton && (
            <Button
              status="simple"
              size="small"
              {...leftButton}
              disabled={currentState === 'disabled'}
            />
          )}
          <input
            className={clsx(styles.input)}
            disabled={currentState === 'disabled'}
            ref={ref}
            type={inputType}
            id={id}
            name={name ?? id}
            required={required}
            {...props}
          />
          {finalRightButton && (
            <Button
              status="simple"
              size="small"
              type="button"
              {...finalRightButton}
              disabled={currentState === 'disabled'}
            />
          )}
        </div>

        {validation && (
          <span
            className={clsx(
              styles.validationContainer,
              styles[`state-${validation.state}`]
            )}
          >
            <span className={styles.validationIcon}>
              {validation.state === 'error' ? (
                <Warning16Filled />
              ) : (
                <CheckmarkCircle16Filled />
              )}
            </span>
            <span>{validationMessage}</span>
          </span>
        )}
      </div>
    );
  }
);

export default Input;
