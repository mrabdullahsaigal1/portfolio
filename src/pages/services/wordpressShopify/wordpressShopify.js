import { useState, useEffect, useRef } from 'react';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Intro } from './Intro';
import { Footer } from 'components/Footer';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import styles from './wordpressShopify.module.css';

import militaryLuggageImage from '/public/militaryluggage.png';
import militaryLuggageImageLarge from '/public/militaryluggage.png';
import militaryLuggageImagePlaceholder from '/public/militaryluggage.png';
import giariteImage from '/public/giarite.png';
import giariteImageLarge from '/public/giarite.png';
import giariteImagePlaceholder from '/public/giarite.png';
import nutriusBodyImage from '/public/nutriusbody.png';
import nutriusBodyImageLarge from '/public/nutriusbody.png';
import nutriusBodyImagePlaceholder from '/public/nutriusbody.png';

const disciplines = [
  'Military Luggage',
  'Women\'s Bags',
  'Nutrius Body'
];

export const wordpressShopify = () => {
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
        title="Wordpress & Shopify Development Projects"
        description="Highlighting our expertise in Wordpress and Shopify platforms"
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
          title="Military Luggage - BigCommerce Website"
          description="Designed and developed a BigCommerce site for Military Luggage, featuring advanced e-commerce capabilities and analytics integration."
          buttonText="View Project"
          buttonLink="https://militaryluggage.com"
          model={{
            type: 'laptop',
            alt: 'Military Luggage project',
            textures: [
              {
                srcSet: [militaryLuggageImage, militaryLuggageImageLarge],
                placeholder: militaryLuggageImagePlaceholder,
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
          title="Women's Bags E-commerce - Shopify"
          description="Developed a stylish and modern Shopify store for women's bags, focusing on speed and user experience with custom design elements."
          buttonText="View Project"
          buttonLink="https://giarite.com"
          model={{
            type: 'laptop',
            alt: 'Giarite Shopify project',
            textures: [
              {
                srcSet: [giariteImage, giariteImageLarge],
                placeholder: giariteImagePlaceholder,
              },
            ],
          }}
        />
        <ProjectSummary
          id="project-3"
          sectionRef={projectThree}
          visible={visibleSections.includes(projectThree.current)}
          index={3}
          title="Custom Shopify Development - Nutrius Body"
          description="Provided custom development for Shopify, enhancing Nutrius Body's e-commerce platform with unique features and optimizations."
          buttonText="View Project"
          buttonLink="https://www.nutriusbody.com"
          model={{
            type: 'laptop',
            alt: 'Nutrius Body Shopify project',
            textures: [
              {
                srcSet: [nutriusBodyImage, nutriusBodyImageLarge],
                placeholder: nutriusBodyImagePlaceholder,
              },
            ],
          }}
        />
      </div>
      <Footer />
    </div>
  );
};
