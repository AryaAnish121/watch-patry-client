import { useEffect } from 'react';
import { useRouter } from 'next/router';
import appKey from '../components/appKey';

const Logout = () => {
  const router = useRouter();
  useEffect(() => {
    localStorage.setItem(appKey, '');
    router.push('/');
  }, []);
  return (
    <div>
      <h1>Logged Out</h1>
    </div>
  );
};

export default Logout;
