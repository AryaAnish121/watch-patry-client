import Link from 'next/link';
import Head from 'next/head';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import appKey from '../../../components/appKey';
import styles from '../../../styles/ClientRedirect.module.css';
import { useEffect } from 'react';

const GithubClientAuth = ({ query }) => {
  useEffect(() => {
    localStorage.setItem(appKey, query);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Successfully Authenticated</title>
        <meta name="description" content="Authentication Successfull" />
      </Head>
      <div className={styles.box}>
        <h1 className={styles.successMessage}>
          <CheckCircleIcon color="inherit" fontSize="small" /> Successfully
          Authenticated
        </h1>
        <Link href="/">
          <a className={styles.backLink}>Click here to go back</a>
        </Link>
      </div>
    </div>
  );
};

export default GithubClientAuth;

export const getServerSideProps = (ctx) => {
  return {
    props: {
      query: ctx.query.code,
    },
  };
};
