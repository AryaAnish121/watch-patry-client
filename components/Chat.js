import styles from '../styles/watchShow.module.css';

const Chat = ({ name, avatar, content }) => {
  return (
    <div className={styles.chat}>
      <div className={styles.chatAvatar}>
        <img src={avatar} alt="avatar" title={name} />
      </div>
      <p className={styles.chatContent}>{content}</p>
    </div>
  );
};

export default Chat;
