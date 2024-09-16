import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from './Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { Testimonials } from "components/Testimonials/testimonials";
import { useEffect, useRef, useState } from 'react';
import styles from './testimonials.module.css';
import { Section } from 'components/Section';

const disciplines = [
  '200+ Projects',
  '100+ Happy Clients',
  ,
];

export const TestimonialsPage = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const testimonials = useRef();

  useEffect(() => {
    const sections = [intro, testimonials];

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
        title="Gensols"
        description="We craft digital experiences that combine design and technology."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <div className={styles.projectSummary}>
      <Testimonials
        sectionRef={testimonials}
        id="testimonials"
      />
      <Footer className={styles.homeFooter}/>
      </div>
    </div>
  );
};
