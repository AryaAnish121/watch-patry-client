import styles from '../styles/watchShow.module.css';
import Chat from './Chat';
import appKey from './appKey';
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';

const Chats = ({ chat, handleShowChat }) => {
  const [ws, setWs] = useState();
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([
    {
      name: 'Arya Anish',
      avatar:
        'https://avatars.dicebear.com/api/male/${profile.displayName}.svg',
      content: 'This is a dummy message :)',
    },
  ]);

  useState(() => {
    const myws = new WebSocket(`ws://localhost:5000`);

    myws.onmessage = (e) => {
      const { data } = e;
      const jsonData = JSON.parse(data);
      setChats((prev) => {
        return [...prev, jsonData];
      });
      setMessage('');
    };

    setWs(myws);
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ws.send(
      JSON.stringify({ auth: localStorage.getItem(appKey), content: message })
    );
  };

  return (
    <div className={`${styles.liveChats} ${chat ? styles.showChat : null}`}>
      <div className={styles.chatTopBar}>
        <CloseIcon
          fontSize="small"
          className={styles.closeIcon}
          onClick={handleShowChat}
        />
        <h3 className={styles.chatHeading}>chat</h3>
      </div>
      <div className={styles.chats}>
        {chats.map((chat, index) => {
          return <Chat key={index} {...chat} />;
        })}
      </div>
      <form className={styles.chatBox} onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="chat with the club"
          className={styles.chatInput}
        />
        <button type="submit" className={styles.chatButton}>
          <SendIcon fontSize="small" color="inherit" />
        </button>
      </form>
    </div>
  );
};

export default Chats;
