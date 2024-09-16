import { useState, useEffect, useRef } from 'react';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Intro } from './Intro';
import { Footer } from 'components/Footer';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import styles from './mobileDev.module.css';

import dollarShaveClubImage from 'assets/hotelrebel-01.png';
import dollarShaveClubImageLarge from 'assets/hotelrebel-01.png';
import dollarShaveClubImagePlaceholder from 'assets/hotelrebel-01.png';
import dollarShaveClub1Image from 'assets/hotelrebel-02.png';
import dollarShaveClub1ImageLarge from 'assets/hotelrebel-02.png';
import dollarShaveClub1ImagePlaceholder from 'assets/hotelrebel-02.png';
import pembrokeFoodStoreImage from 'assets/Pembroke1.png';
import pembrokeFoodStoreImageLarge from 'assets/Pembroke1.png';
import pembrokeFoodStoreImagePlaceholder from 'assets/Pembroke2.png';
import pembrokeFoodStore1Image from 'assets/Pembroke2.png';
import pembrokeFoodStore1ImageLarge from 'assets/Pembroke2.png';
import pembrokeFoodStore1ImagePlaceholder from 'assets/Pembroke1.png';
import financielleImage from 'assets/financielle1.png';
import financielleImageLarge from 'assets/financielle1.png';
import financielleImagePlaceholder from 'assets/financielle1.png';
import financielle1Image from 'assets/financielle2.png';
import financielle1ImageLarge from 'assets/financielle2.png';
import financielle1ImagePlaceholder from 'assets/financielle2.png';

const disciplines = [
  'Food App',
  'Retail App',
  'Financielle'
];

export const mobileDev = () => {
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
        title="Mobile App Development"
        description="Our Projects in Mobile App Development"
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
          title="Hotel Management"
          description="A hotem management app for hotel owners, which helps hotel owners to increase revenue built with custom UI/UX elements."
          buttonText="View Project"
          style={{
            marginBottom: '100px'
          }}
          buttonLink="https://us.dollarshaveclub.com"
          model={{
            type: 'phone',
            alt: 'Dollar Shave Club project',
            textures: [
              {
                srcSet: [dollarShaveClubImage, dollarShaveClubImageLarge],
                placeholder: dollarShaveClubImagePlaceholder,
              },
              {
                srcSet: [dollarShaveClub1Image, dollarShaveClub1ImageLarge],
                placeholder: dollarShaveClub1ImagePlaceholder,
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
          title="Food Store Mobile App"
          description="Pembroke Food Store Online app, a seamless grocery shopping experience right from your phone, integrating diverse products and essentials."
          buttonText="View Project"
          style={{
            marginBottom: '100px',
            marginTop: '100px'
          }}
          buttonLink="https://pembrokefoodstore.com"
          model={{
            type: 'phone',
            alt: 'Pembroke Food Store app',
            textures: [
              {
                srcSet: [pembrokeFoodStoreImage, pembrokeFoodStoreImageLarge],
                placeholder: pembrokeFoodStoreImagePlaceholder,
              },
              {
                srcSet: [pembrokeFoodStore1Image, pembrokeFoodStore1ImageLarge],
                placeholder: pembrokeFoodStore1ImagePlaceholder,
              },
            ],
          }}
        />
        <ProjectSummary
          id="project-3"
          sectionRef={projectThree}
          visible={visibleSections.includes(projectThree.current)}
          index={3}
          title="Financielle - Financial Wellness App"
          description="Developed by Gensols, Financielle brings together a community focused on financial wellness and money management, from debt relief to wealth building."
          buttonText="View Project"
          style={{
            marginTop: '100px'
          }}
          buttonLink="https://www.financielle.co.uk"
          model={{
            type: 'phone',
            alt: 'Financielle app',
            textures: [
              {
                srcSet: [financielleImage, financielleImageLarge],
                placeholder: financielleImagePlaceholder,
              },
              {
                srcSet: [financielle1Image, financielle1ImageLarge],
                placeholder: financielle1ImagePlaceholder,
              },
            ],
          }}
        />
      </div>
      <Footer />
    </div>
  );
};
