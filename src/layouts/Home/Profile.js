import profileImgLarge from "assets/aboutus.png";
import profileImgPlaceholder from "assets/aboutus.png";
import profileImg from "assets/aboutus.png";
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="About US" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="s" as="p">
      Welcome to Gensols. We're dedicated to offering cutting-edge technology
      solutions tailored to your needs. As a dynamic software house, we excel in
      providing comprehensive full-stack development services for web and mobile
      platforms. Our expertise transcends traditional boundaries, covering
      various deployment types, with a particular focus on staying abreast of
      the latest trends in innovative and generative Artificial Intelligence
      (AI).
    </Text>
    <Text className={styles.description} data-visible={visible} size="s" as="p">
      At Gensols, we take immense pride in our role as trailblazers within the
      digital realm. Our ethos revolves around seamlessly integrating creativity
      with technical expertise. With a dedicated team of highly skilled
      professionals, we craft bespoke solutions meticulously tailored to surpass
      the ever-evolving demands of your business landscape. From crafting
      responsive and visually captivating websites to developing dynamic mobile
      applications, we traverse the entire spectrum of full-stack development
      with unparalleled precision and finesse.
    </Text>
    <Text className={styles.description} data-visible={visible} size="s" as="p">
      Our expert developers harness cutting-edge technologies such as ReactJS,
      Vue.js, Angular, Node.js, Reach Native and Flutter along with creative
      strategies, to ensure your online presence is visually stunning,
      functionally robust, and user-friendly.
    </Text>
    <Text className={styles.description} data-visible={visible} size="s" as="p">
      Join us on an exciting journey where innovation intersects with
      functionality, and allow Gensols to serve as your catalyst for success in
      the constantly evolving digital landscape.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Gensols
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Intro-imahge"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
