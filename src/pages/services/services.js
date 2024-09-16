import Barcode from 'assets/barcode.svg';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { useWindowSize } from 'hooks';
import Image from 'next/image';
import { useState } from 'react';
import { cssProps } from 'utils/style';
import styles from './services.module.css';
import { useReducedMotion } from 'framer-motion';
import Link from 'next/link';

const ServiceCard = ({ title, abstract, index, banner, featured, pathname }) => {
  const [hovered, setHovered] = useState(false);
  const reduceMotion = useReducedMotion();
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <article
      className={styles.post}
      data-featured={!!featured}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      {featured && !!banner && (
        <div className={styles.postImage}>
          <Image
            noPauseButton
            play={!reduceMotion ? hovered : undefined}
            src={{
              src: banner,
              width: 250,
              height: 200,
            }}
            placeholder={{ src: `${banner.split('.')[0]}-placeholder.jpg` }}
            alt="test"
            role="presentation"
            height="100"
            width="200"
          />
        </div>
      )}
      <Link href={pathname}>
        <a
          className={styles.postLink}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.postDetails}>
            <Image
              height={300}
              width={600}
              src={banner}
              alt={title}
            />
            <div aria-hidden className={styles.postDate}>
              <Divider notchWidth="64px" notchHeight="8px" />
            </div>
            <Heading as="h1" level={3} className={styles.postsHeader}>
              {title}
            </Heading>
            <Text size={'s'} as="p" className={styles.postList}>
              {abstract}
            </Text>
          </div>
        </a>
      </Link>
    </article>
  );
};

export const Services = ({ services }) => {
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;

  const postsHeader = (
    <header className={styles.header}>
      <Heading className={styles.headingServices} level={2} as="h1">
        <DecoderText className={styles.headingServices} text="Services We Offer" />
      </Heading>
    </header>
  );

  const postList = (
    <>
      {!isSingleColumn && postsHeader}
      <div className={styles.list}>
        {services.map(({ pathname, ...post }, index) => (
          <ServiceCard key={pathname} pathname={pathname} index={index} {...post} />
        ))}
      </div>
    </>
  );

  return (
    <article className={styles.articles}>
      <Meta title="Services" description="Innovative Services We Offer" />
      <Section className={`${styles.content} ${styles.w100}`}>
        {!isSingleColumn && <div className={styles.grid}>{postList}</div>}
        {isSingleColumn && (
          <div className={styles.grid}>
            <div>{postsHeader}</div>
            <div>{postList}</div>
          </div>
        )}
      </Section>
      <Footer />
    </article>
  );
};
