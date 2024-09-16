import React, { forwardRef }   from 'react';
import Image from 'next/image';
import { useId } from 'react'; // Also, you don't need to import forwardRef separately

import { classes } from 'utils/style';
import styles from './Monogram.module.css';
import logoImage from 'assets/logo.png'; // Adjust the path to your PNG file

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <div
      aria-hidden
      className={classes(styles.monogram, className)}
      ref={ref}
      {...props}
      style={{  width: '200px', height: '150px' }}

    >
      <Image
      height={200}
      width={200}
        src={logoImage}
        alt="Logo"
  
      />
      {highlight && (
        <div
          className={styles.highlight}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            clipPath: `url(#${clipId})`,
            // backgroundColor: 'rgba(255, 255, 255, 0.5)', // Example highlight style
          }}
        ></div>
      )}
    </div>
  );
});
