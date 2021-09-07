import styles from '../styles/watchShow.module.css';
import Controls from './Controls';
import Chat from './Chats';
import { useEffect, useRef, useState } from 'react';
import appBaseUrl from './appBaseUrl';

const WatchShow = () => {
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);
  const [chat, setChat] = useState(false);
  const videoRef = useRef(null);

  const toogleMute = () => {
    setMuted(!muted);
  };

  const handlePause = () => {
    if (paused) {
      videoRef.current.play();
      setPaused(false);
    } else {
      videoRef.current.pause();
      setPaused(true);
    }
  };

  const handleShowChat = () => {
    setChat(!chat);
  };

  const handleSync = async () => {
    const res = await fetch(`${appBaseUrl}/sync`);
    const { data } = await res.json();
    videoRef.current.currentTime = data;
  };

  useEffect(() => {
    videoRef.current.muted = true;
    videoRef.current.play();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}></div>
      <video
        src="/video/video.mp4"
        className={styles.video}
        ref={videoRef}
        onClick={handlePause}
        muted={muted}
      ></video>
      <Controls
        toogleMute={toogleMute}
        muted={muted}
        paused={paused}
        handleShowChat={handleShowChat}
        handlePause={handlePause}
        handleSync={handleSync}
      />
      <Chat handleShowChat={handleShowChat} chat={chat} />
    </div>
  );
};

export default WatchShow;
