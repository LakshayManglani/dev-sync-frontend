import { useDispatch } from 'react-redux';
import { Button, Input, Link } from '../../../../components';
import styles from '../../Auth.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLoginMutation } from '../../../../app/services/auth';
import { setCredentials } from '../../auth.slice';
import { extractLoginFormData } from '../../utils/formHelpers';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [login, { isLoading }] = useLoginMutation();

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
      <SubmitButton isLoading={isLoading} />
    </form>
  );
};

const InputFieldGroup = () => (
  <div className={styles.inputGroup}>
    <Input
      label="Email or username"
      type="text"
      autoComplete="username"
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

const SubmitButton = ({ isLoading }: { isLoading: boolean }) => (
  <Button
    label={isLoading ? 'Logging in...' : 'Login'}
    variant="primary"
    status="rest"
    type="submit"
    disabled={isLoading}
  />
);

export default LoginForm;
