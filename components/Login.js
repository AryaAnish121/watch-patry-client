import GitHubIcon from '@material-ui/icons/GitHub';
import appBaseUrl from './appBaseUrl';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css';

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push(`${appBaseUrl}/auth/github`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <h1 className={styles.loginHeading}>Please Login</h1>
        <button onClick={handleLogin} className={styles.buttonStyle}>
          <span className={styles.buttonContent}>
            <GitHubIcon fontSize="small" color="inherit" /> Login with github
          </span>
          <span className={styles.buttonArrow}>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
