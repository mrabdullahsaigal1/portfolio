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
import styles from './blogs.module.css';
import { useReducedMotion } from 'framer-motion';

const BlogCard = ({ title, abstract, about, summary, posted, index, banner, featured }) => {
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
            width="400"
          />
        </div>
      )}
      <a
        className={styles.postLink}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.postDetails}>
        <Heading as="h1" level={3} className={styles.postsHeader}>
            {title}
          </Heading>
          <Image
            height={400}
            width={800}
            src={banner}
            alt={title}
          />
          <Text size={'m'} as="p"  className={styles.postList}>
            Date Posted: {posted}
          </Text>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
          </div>
          <Heading as="h1" level={5} className={styles.postsHeader}>
            About
          </Heading>
          <Text size={'m'} as="p"  className={styles.postList}>
            {about}
          </Text>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
          </div>
          <Heading as="h1" level={5} className={styles.postsHeader}>
            Interpretation
          </Heading>
          <Text size={'s'} as="p"  className={styles.postList}>
            {abstract}
          </Text>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
          </div>
          <Heading as="h1" level={5} className={styles.postsHeader}>
            Wrap Up
          </Heading>
          <Text size={'s'} as="p"  className={styles.postList}>
            {summary}
          </Text>
        </div>
      </a>
    </article>
  );
};

export const Blogs = ({ blogs }) => {
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;

  const postsHeader = (
    <header className={styles.header}>
      <Heading className={styles.headingServices}  level={2} as="h1">
        <DecoderText className={styles.headingServices}  text="Insightful Blogs" />
      </Heading>
      {/* <Barcode /> */}
    </header>
  );

  const postList = (
    <>
    {!isSingleColumn && postsHeader}
    <div className={styles.list}>
      {blogs.map(({ slug, ...post }, index) => (
        <BlogCard key={slug} slug={slug} index={index} {...post} />
      ))}
    </div>
    </>
  );

  return (
    <article className={styles.articles}>
      <Meta title="Services" description="Our Insightful Blogs" />
      <Section className={`${styles.content} ${styles.w100}`}>
        {!isSingleColumn && <div className={styles.grid}>{postList}</div>}
        {isSingleColumn && (
          <div className={styles.grid}>
            <div >{postsHeader}</div>
            <div >{postList}</div>
          </div>
        )}
      </Section>
      <Footer />
    </article>
  );
};
