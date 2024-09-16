// components/RedirectButton.js
import styles from './RedirectButton.module.css'; // Create this CSS module for styling
import { useRouter } from 'next/router';

const RedirectButton = ({ url, children }) => {
  const router = useRouter();

  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      {children}
    </button>
  );
};

export default RedirectButton;
