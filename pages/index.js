import Head from 'next/head';
import appBaseUrl from '../components/appBaseUrl';
import appKey from '../components/appKey';
import Login from '../components/Login';
import { useEffect, useState } from 'react';
import WatchShow from '../components/WatchShow';

const Home = () => {
  const [userData, setUserData] = useState({
    code: 401,
  });

  useEffect(async () => {
    const res = await fetch(`${appBaseUrl}/user`, {
      headers: {
        auth: `${localStorage.getItem(appKey)}`,
      },
    });
    const data = await res.json();
    setUserData(data);
  }, []);

  return (
    <div>
      <Head>
        <title>Watch Party</title>
        <meta
          name="description"
          content="Watch a movie in sync with your friends, also you can talk and chat with your friends"
        />
        <meta name="keywords" content="Watch Party, Watch, Party, Talk, Chat" />
      </Head>
      {userData.code === 200 ? <WatchShow /> : <Login />}
    </div>
  );
};

export default Home;
