import { useDispatch } from 'react-redux';
import { Button, Input, Link } from '../../../../components';
import styles from '../../Auth.module.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLoginMutation } from '../../../../app/services/auth';
import { setCredentials } from '../../auth.slice';
import { extractLoginFormData } from '../../utils/formHelpers';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [login, { isLoading }] = useLoginMutation();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = extractLoginFormData(e.currentTarget);

    try {
      const userData = await login(formData).unwrap();
      dispatch(setCredentials(userData.data));
      navigate('/home');
    } catch (err: unknown) {
      const error = err as { status: number };

      switch (error.status) {
        case 401:
          setError('Invalid login credentials');
          break;
        case 429:
          setError('Too many login attempts. Please try again later.');
          setButtonDisabled(true);
          setCountdown(60);
          break;
        default:
          setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputFieldGroup />
      {error && <ErrorMessage message={error} />}
      <SubmitButton
        isLoading={isLoading}
        disabled={buttonDisabled}
        countdown={countdown}
      />
    </form>
  );
};

const InputFieldGroup = () => (
  <div className={styles.inputGroup}>
    <Input
      label="Email or username"
      type="text"
      autoComplete="username"
      name="username"
      required
      autoFocus
    />
    <div className={styles.passwordInput}>
      <Input
        label="Password"
        type="password"
        autoComplete="current-password"
        required
      />
      <Link to="/auth/forgot-password" size="large">
        Forgot password?
      </Link>
    </div>
  </div>
);

const ErrorMessage = ({ message }: { message: string }) => (
  <p className="text-danger" role="alert" aria-live="assertive">
    {message}
  </p>
);

const SubmitButton = ({
  isLoading,
  disabled,
  countdown,
}: {
  isLoading: boolean;
  disabled: boolean;
  countdown: number;
}) => (
  <Button
    label={(() => {
      if (isLoading) {
        return 'Logging in...';
      }

      if (disabled) {
        return 'Try again in ';
      }

      return 'Log in';
    })()}
    counter={
      disabled
        ? {
            count: countdown,
            unit: 's',
          }
        : undefined
    }
    variant="primary"
    status="rest"
    type="submit"
    disabled={isLoading || disabled}
  />
);

export default LoginForm;
