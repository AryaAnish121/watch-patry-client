import styles from '../styles/watchShow.module.css';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import ChatIcon from '@material-ui/icons/Chat';
import SyncIcon from '@material-ui/icons/Sync';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const Controls = ({
  toogleMute,
  handlePause,
  muted,
  paused,
  handleShowChat,
  handleSync,
}) => {
  return (
    <div className={styles.controls}>
      <ChatIcon
        onClick={handleShowChat}
        color="inherit"
        className={styles.chatIcon}
      />
      {muted ? (
        <VolumeOffIcon color="inherit" onClick={toogleMute} />
      ) : (
        <VolumeUpIcon color="inherit" onClick={toogleMute} />
      )}
      <SyncIcon
        color="inherit"
        onClick={handleSync}
        className={styles.syncIcon}
      />
      {paused ? (
        <PlayArrowIcon color="inherit" onClick={handlePause} />
      ) : (
        <PauseIcon color="inherit" onClick={handlePause} />
      )}
    </div>
  );
};

export default Controls;
