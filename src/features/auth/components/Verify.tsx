import { useNavigate, useParams } from 'react-router-dom';
import { useVerifyAndCreateMutation } from '../../../app/services/auth';
import { useEffect } from 'react';
import { Link } from '../../../components';

const Verify = () => {
  const navigate = useNavigate();
  const { token } = useParams<{ token: string }>();
  const [verifyAndCreate, { isLoading, isError, isSuccess }] =
    useVerifyAndCreateMutation();

  useEffect(() => {
    if (token) {
      verifyAndCreate({ token });
    }
  }, [token, verifyAndCreate]);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => navigate('/login'), 2000);
    }
  }, [isSuccess, navigate]);

  return (
    <main className="full center">
      <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
        {isLoading && <p>Loading...</p>}
        {isSuccess && (
          <p className="text-success">
            Your account has been successfully verified. You can now log in.
          </p>
        )}
        {isError && (
          <div>
            <p className="text-danger" role="alert" aria-live="assertive">
              Verification failed. The link may be invalid or expired.
            </p>
            <Link to={'/register'} size="large">
              {'Register'}
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default Verify;
