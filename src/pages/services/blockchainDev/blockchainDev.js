import { useState, useEffect, useRef } from 'react';
import { Meta } from 'components/Meta';
import { Intro } from './Intro';
import { Section } from 'components/Section';
import { Footer } from 'components/Footer';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import styles from './blockchainDev.module.css';

import nfthodlrImage from '/public/nfthodlr.png';
import nfthodlrImageLarge from '/public/nfthodlr.png';
import nfthodlrImagePlaceholder from '/public/nfthodlr.png';
import grayscurrencyImage from '/public/grayscurrency.png';
import grayscurrencyImageLarge from '/public/grayscurrency.png';
import grayscurrencyImagePlaceholder from '/public/grayscurrency.png';
import vikingfehuImage from '/public/vikingfehu.png';
import vikingfehuImageLarge from '/public/vikingfehu.png';
import vikingfehuImagePlaceholder from '/public/vikingfehu.png';

const disciplines = [
  'NFTHodlr',
  'TGC Pulsechain',
  'Viking Fehu'
];

export const blockchainDev = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });
    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Blockchain Development"
        description="Our Blockchain Development Projects"
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <div className={styles.projectSummary}>
        <ProjectSummary
          id="project-1"
          sectionRef={projectOne}
          visible={visibleSections.includes(projectOne.current)}
          index={1}
          title="NFTHodlr - NFT Token Gated Offer Marketplace"
          description="An NFT token gated marketplace for brands to target specific NFT communities with exclusive offers."
          buttonText="View Project"
          buttonLink="https://nfthodlr.xyz"
          model={{
            type: 'laptop',
            alt: 'NFTHodlr project',
            textures: [
              {
                srcSet: [nfthodlrImage, nfthodlrImageLarge],
                placeholder: nfthodlrImagePlaceholder,
              },
            ],
          }}
        />
        <ProjectSummary
          id="project-2"
          alternate
          sectionRef={projectTwo}
          visible={visibleSections.includes(projectTwo.current)}
          index={2}
          title="TGC Pulsechain"
          description="Developed for Gensols client, TGC Pulsechain is a robust blockchain architecture enhancing decentralized transactions and applications."
          buttonText="View Project"
          buttonLink="https://pulsechain.thegrayscurrency.com"
          model={{
            type: 'laptop',
            alt: 'TGC Pulsechain project',
            textures: [
              {
                srcSet: [grayscurrencyImage, grayscurrencyImageLarge],
                placeholder: grayscurrencyImagePlaceholder,
              },
            ],
          }}
        />
        <ProjectSummary
          id="project-3"
          sectionRef={projectThree}
          visible={visibleSections.includes(projectThree.current)}
          index={3}
          title="Viking Fehu - Token Launch & CEX"
          description="Viking Fehu integrates seamless event ticketing with blockchain technology, featuring a native token and ICO for secure and efficient operations."
          buttonText="View Project"
          buttonLink="https://vikingfehu.io"
          model={{
            type: 'laptop',
            alt: 'Viking Fehu project',
            textures: [
              {
                srcSet: [vikingfehuImage, vikingfehuImageLarge],
                placeholder: vikingfehuImagePlaceholder,
              },
            ],
          }}
        />
      </div>
      <Footer />
    </div>
  );
};
