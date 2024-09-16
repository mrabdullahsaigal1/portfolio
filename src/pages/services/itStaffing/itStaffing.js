import { useState, useEffect, useRef } from 'react';
import { Meta } from 'components/Meta';
import { Intro } from './Intro';
import { Section } from 'components/Section';
import { Footer } from 'components/Footer';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import styles from './itStaffing.module.css';

import itStaffingImage from '/public/ItStaffing.png';
import itStaffingImageLarge from '/public/ItStaffing.png';
import itStaffingImagePlaceholder from '/public/ItStaffing.png';

export const itStaffing = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();

  useEffect(() => {
    const sections = [intro];

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

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="IT Staffing Services"
        description="Showcasing our comprehensive IT staffing solutions"
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={["IT Staffing"]}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <div className={styles.projectSummary}>
        <ProjectSummary
          id="it-staffing-services"
          sectionRef={intro}
          visible={visibleSections.includes(intro.current)}
          title="IT Staffing Services"
          description="GENSOLS provides leading IT staffing solutions, specializing in delivering top talent and services for your business needs. We ensure the best match for your technical requirements and company culture, supporting both temporary and long-term staffing goals."
          buttonText="Contact Us"
          buttonLink="/contact"
          model={{
            type: 'laptop',
            alt: 'IT Staffing Services',
            textures: [
              {
                srcSet: [itStaffingImage, itStaffingImageLarge],
                placeholder: itStaffingImagePlaceholder,
              },
            ],
          }}
        />
      </div>
      <Footer />
    </div>
  );
};
