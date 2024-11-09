import { ChangeEvent, useEffect, useState } from 'react';
import { Button, Input } from '../../../../components';
import styles from '../../Auth.module.scss';
import {
  useCheckAvailabilityQuery,
  useSendVerificationEmailMutation,
} from '../../../../app/services/auth';
import { useDebouncedValue } from '../../utils/hooks';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';
import { extractRegisterFormData } from '../../utils/formHelpers';

const INITIAL_FORM_VALUES = { username: '', email: '', password: '' };
const INITIAL_ERROR_STATE = { email: false, username: false };

const RegisterForm = () => {
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const [error, setError] = useState(INITIAL_ERROR_STATE);
  const [emailSent, setEmailSent] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);

  const debouncedEmail = useDebouncedValue(formValues.email);
  const debouncedUsername = useDebouncedValue(formValues.username);

  const { data, isLoading: isCheckingAvailability } = useCheckAvailabilityQuery(
    { email: debouncedEmail, username: debouncedUsername },
    { skip: !(debouncedEmail || debouncedUsername) }
  );

  const [sendVerificationEmail, { isLoading: isSendingEmail }] =
    useSendVerificationEmailMutation();

  useEffect(() => {
    if (data) {
      const { email, username } = data.data;
      setError({ email, username });
    }
  }, [data]);

  useEffect(() => {
    let timer: number;
    if (buttonDisabled && countdown > 0) {
      timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
    } else if (countdown === 0) {
      setButtonDisabled(false);
      setCountdown(60);
    }
    return () => clearTimeout(timer);
  }, [buttonDisabled, countdown]);

  const handleChange =
    (field: keyof typeof formValues) => (e: ChangeEvent<HTMLInputElement>) => {
      setFormValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!error.username) {
      alert('Username is not available. Choose a different username.');
      return;
    }

    if (!error.email) {
      alert('Email is not available. Choose a different email.');
      return;
    }

    const formData = extractRegisterFormData(e.currentTarget);

    try {
      await sendVerificationEmail(formData).unwrap();
      setEmailSent(true);
      setButtonDisabled(true);
      setCountdown(60);
    } catch (err) {
      console.error('Error sending verification email:', err);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputFieldGroup
        formValues={formValues}
        onChange={handleChange}
        error={error}
        isLoading={isCheckingAvailability}
      />
      {emailSent && <SuccessMessage />}
      <ActionButton
        disabled={isSendingEmail || buttonDisabled}
        countdown={countdown}
        buttonDisabled={buttonDisabled}
      />
    </form>
  );
};

const InputFieldGroup = ({
  formValues,
  onChange,
  error,
  isLoading,
}: {
  formValues: typeof INITIAL_FORM_VALUES;
  onChange: (
    field: keyof typeof INITIAL_FORM_VALUES
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  error: typeof INITIAL_ERROR_STATE;
  isLoading: boolean;
}) => (
  <div className={styles.inputGroup}>
    <div className={styles.nameInput}>
      <Input
        label="First Name"
        type="text"
        autoComplete="given-name"
        autoFocus
        required
      />
      <Input label="Last Name" type="text" autoComplete="family-name" />
    </div>
    <Input
      label="Username"
      type="text"
      autoComplete="username"
      required
      value={formValues.username}
      onChange={onChange('username')}
      validation={
        formValues.username && !isLoading
          ? {
              state: error.username ? 'success' : 'error',
              message: error.username
                ? 'Username is available'
                : 'Username is not available',
            }
          : undefined
      }
    />
    <Input
      label="Email"
      type="email"
      autoComplete="email"
      required
      value={formValues.email}
      onChange={onChange('email')}
      validation={
        formValues.email && !isLoading
          ? {
              state: error.email ? 'success' : 'error',
              message: error.email
                ? 'Email is available'
                : 'Email is not available',
            }
          : undefined
      }
    />
    <div>
      <Input
        label="Password"
        type="password"
        autoComplete="new-password"
        required
        value={formValues.password}
        onChange={onChange('password')}
      />
      <PasswordStrengthIndicator password={formValues.password} />
    </div>
  </div>
);

const SuccessMessage = () => (
  <p className="text-success">
    A verification email has been sent to your email address. Please check your
    inbox and click on the link to verify your account.
  </p>
);

const ActionButton = ({
  disabled,
  countdown,
  buttonDisabled,
}: {
  disabled: boolean;
  countdown: number;
  buttonDisabled: boolean;
}) => (
  <Button
    label={buttonDisabled ? `Resend Email` : 'Send Verification Email'}
    counter={
      buttonDisabled
        ? {
            count: countdown,
            unit: 's',
          }
        : undefined
    }
    variant="primary"
    status="rest"
    type="submit"
    disabled={disabled}
  />
);

export default RegisterForm;
