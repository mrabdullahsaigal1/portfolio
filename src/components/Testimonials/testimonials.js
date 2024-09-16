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
import { useEffect } from 'react';
import { cssProps } from 'utils/style';
import styles from './testimonials.module.css';
import { useReducedMotion } from 'framer-motion';
import { testimonials } from './testimonials-data';

const ServiceCard = ({ name, text, index, image, featured }) => {
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
      {featured && !!image && (
        <div className={`${styles.postImage} hideOnMobile`}>
          <Image
            src={{
              src: image,
              width: 400,
              height: 200,
            }}
            placeholder={{ src: `${image.split('.')[0]}-placeholder.jpg` }}
            alt="test"
            role="presentation"
            height="100"
            width="200"
          />
        </div>
      )}

      <a
        className={styles.postLink}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.postDetails}>
        <Image
            height={300}
            width={500}
            src={image}
            alt={name}
          />
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
          </div>
          <Heading as="h5" level={6} className={styles.postsHeader}>
            {name}
          </Heading>
          <Text size={'xs'} as="p" data-align='center'  className={styles.postList}>
            {featured}
          </Text>
        </div>
      </a>
    </article>
  );
};

export const Testimonials = ({sectionRef, id}) => {
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesStatus, setSlidesStatus] = useState("OOOOOO");

  const postsHeader = (
    <header className={styles.header}>
      <Heading className={styles.headingServices}  level={5} as="h1">
        <DecoderText className={styles.headingServices}  text="Our Testimonials" />
      </Heading>
      {/* <Barcode /> */}
    </header>
  );

  const postList = (
    <>
    {!isSingleColumn && postsHeader}
    <div className={styles.list}>
        <ServiceCard key={testimonials[currentIndex].slug} slug={testimonials[currentIndex].slug} index={currentIndex} image={testimonials[currentIndex].image} featured={testimonials[currentIndex].text} />
    </div>
    <p className={styles.move}>
        {slidesStatus.split('').map((char, index) => (
          <span key={index} onClick={() => moveSlides(index)} className={index === currentIndex ? styles.currentO : styles.normalO}>
            {char}
          </span>
        ))}
      </p>
    </>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % testimonials.length;
      setSlidesStatus("O".repeat(newIndex) + "O" + "O".repeat(testimonials.length - newIndex - 1));
      setCurrentIndex(newIndex);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  const moveSlides = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  return (
    <article className={styles.articles}>
      <Meta title="Testimonials" description="Our Testimonials" />
      <Section className={`${styles.content} ${styles.w100}`} id={id} ref={sectionRef}>
        {!isSingleColumn && <div className={styles.grid}>{postList}</div>}
        {isSingleColumn && (
          <div className={styles.grid}>
            <div >{postsHeader}</div>
            <div >{postList}</div>
          </div>
        )}
      </Section>
    </article>
  );
};
