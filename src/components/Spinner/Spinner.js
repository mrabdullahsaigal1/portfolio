import styles from './Spinner.module.css';

const Spinner = ({ themeId }) => {
  const isDarkTheme = themeId === 'dark';

  return (
    <div className={styles.spinnerContainer}>
      <img
        src={'static/spinner.gif'}
        alt="Loading..."
        className={styles.spinnerGif}
      />
    </div>
  );
};

export default Spinner;
