import { useState, useEffect, useRef } from 'react';
import { Meta } from 'components/Meta';
import { Intro } from './Intro';
import { Section } from 'components/Section';
import { Footer } from 'components/Footer';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import styles from './digitalMarketing.module.css';

import wxllspaceImage from '/public/WXLLSPACE2.png';
import wxllspaceImageLarge from '/public/WXLLSPACE2.png';
import wxllspaceImagePlaceholder from '/public/WXLLSPACE2.png';
import datingAppImage from '/public/Dating-App.png';
import datingAppImageLarge from '/public/Dating-App.png';
import datingAppImagePlaceholder from '/public/Dating-App.png';
import bestDealsImage from '/public/Best-Deals.png';
import bestDealsImageLarge from '/public/Best-Deals.png';
import bestDealsImagePlaceholder from '/public/Best-Deals.png';
import cleanDesignsImage from '/public/Clean-Designs.png';
import cleanDesignsImageLarge from '/public/Clean-Designs.png';
import cleanDesignsImagePlaceholder from '/public/Clean-Designs.png';

const disciplines = [
  'WXLLSPACE',
  'Dating App',
  'ASIAN RENTAL',
  'Clean Designs'
];

export const digitalMarketing = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour];

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
        title="Digital Marketing Projects"
        description="Showcasing our expertise in digital marketing and project execution"
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
          title="WXLLSPACE - Art-Tech Marketplace"
          description="WXLLSPACE is an art-tech marketplace platform helping real estate operators hire artists for mural projects across the US."
          buttonText="View Project"
          buttonLink="https://www.wxllspace.com"
          model={{
            type: 'laptop',
            alt: 'WXLLSPACE project',
            textures: [
              {
                srcSet: [wxllspaceImage, wxllspaceImageLarge],
                placeholder: wxllspaceImagePlaceholder,
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
          title="Dating App - Full Stack Application"
          description="A comprehensive dating app built with modern technologies offering secure and reliable matchmaking services."
          buttonText="View Project"
          buttonLink="https://datingappmh.fly.dev"
          model={{
            type: 'laptop',
            alt: 'Dating App project',
            textures: [
              {
                srcSet: [datingAppImage, datingAppImageLarge],
                placeholder: datingAppImagePlaceholder,
              },
            ],
          }}
        />
        <ProjectSummary
          id="project-3"
          sectionRef={projectThree}
          visible={visibleSections.includes(projectThree.current)}
          index={3}
          title="BEST DEALS ASIAN RENTAL - Accommodation Listings"
          description="An intuitive platform offering a handpicked selection of accommodations across Asia, tailored for user convenience and accessibility."
          buttonText="View Project"
          buttonLink="https://bestdealsasiarentals.com"
          model={{
            type: 'laptop',
            alt: 'BEST DEALS ASIAN RENTAL project',
            textures: [
              {
                srcSet: [bestDealsImage, bestDealsImageLarge],
                placeholder: bestDealsImagePlaceholder,
              },
            ],
          }}
        />
        <ProjectSummary
          id="project-4"
          alternate
          sectionRef={projectFour}
          visible={visibleSections.includes(projectFour.current)}
          index={4}
          title="Clean Designs - Commercial Laundry Equipment"
          description="Providing top-notch web solutions for a commercial laundry equipment service, enhancing both reach and operational efficiency."
          buttonText="View Project"
          buttonLink="http://cleandesigns.com"
          model={{
            type: 'laptop',
            alt: 'Clean Designs project',
            textures: [
              {
                srcSet: [cleanDesignsImage, cleanDesignsImageLarge],
                placeholder: cleanDesignsImagePlaceholder,
              },
            ],
          }}
        />
      </div>
      <Footer />
    </div>
  );
};
