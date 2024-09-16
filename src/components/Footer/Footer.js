import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';
import { motion } from 'framer-motion';
import { Icon } from 'components/Icon';
import { socialLinks } from 'components/Navbar/navData';

export const Footer = ({ className }) => (
  <motion.footer className={classes(styles.footer, className)} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} viewport={{ once: true }}>
    <div style={{marginBottom: '2%'}} className={styles['footer-left']}>
      {/* You can add any content here if needed */}
         <NavbarIcons desktop />

    </div>
    <div className={styles['footer-center']}>
      <Text size="s" align="center">
        <span className={styles.date}>{`© ${new Date().getFullYear()} Gensols.`}</span>
        <p>Crafted by yours truly</p>
      </Text>
    </div>
    <div className={styles['footer-right']}>
      <Text size="s">
        <p className={styles.footerRight1}>Contact us:</p>
        <p className={styles.footerRight2}>Email: contact@gensols.org</p>
        <p className={styles.footerRight2}>Phone: +14063162802</p>
        {/* <p className={styles.footerRight3}>Phone: +14692243754</p> */}
        {/* <p>Address: 1234 Street Name, City, Country</p> */}
      </Text>
    </div>
  </motion.footer>
);
const NavbarIcons = ({ desktop }) => (
  <div className={styles.navIcons}>
    {socialLinks.map(({ label, url, icon }) => (
      <a
        key={label}
        data-navbar-item={desktop || undefined}
        className={styles.navIconLink}
        aria-label={label}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className={styles.navIcon} icon={icon} />
      </a>
    ))}
  </div>
);
