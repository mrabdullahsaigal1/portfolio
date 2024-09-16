import sprTextureLarge from 'assets/documentic.png';
import sprTexturePlaceholder from 'assets/documentic.png';
import sprTexture from 'assets/documentic.png';
import gamestackTexture6Large from 'assets/financielle2.png';
import gamestackTexture6Placeholder from 'assets/financielle2.png';
import gamestackTexture6 from 'assets/financielle2.png';
import gamestackTexture5Large from 'assets/financielle1.png';
import gamestackTexture5Placeholder from 'assets/financielle1.png';
import gamestackTexture5 from 'assets/financielle1.png';
import gamestackTexture4Large from 'assets/Pembroke2.png';
import gamestackTexture4Placeholder from 'assets/Pembroke2.png';
import gamestackTexture4 from 'assets/Pembroke2.png';
import gamestackTexture3Large from 'assets/Pembroke1.png';
import gamestackTexture3Placeholder from 'assets/Pembroke1.png';
import gamestackTexture3 from 'assets/Pembroke1.png';
import gamestackTexture2Large from 'assets/hotelrebel-02.png';
import gamestackTexture2Placeholder from 'assets/hotelrebel-02.png';
import gamestackTexture2 from 'assets/hotelrebel-02.png';
import gamestackTextureLarge from 'assets/hotelrebel-01.png';
import gamestackTexturePlaceholder from 'assets/hotelrebel-01.png';
import gamestackTexture from 'assets/hotelrebel-01.png';
import sprTextureLargeU from 'assets/unation-01.png';
import sprTexturePlaceholderU from 'assets/unation-01.png';
import dronos from 'assets/Dronos.jpg';
import cleanDesigns from 'assets/clean-designs.png';
import bestDeals from 'assets/best-deals.png';
import sprTextureU from 'assets/unation-01.png';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from './Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { Testimonials } from "components/Testimonials/testimonials";
import { useEffect, useRef, useState } from 'react';
import styles from './projects.module.css';
import { Section } from 'components/Section';


const disciplines = [
  'Our Projects',
  'Web Apps',
  'Mobile Apps',
  'Block Chain',
  'AI Development',
  ,
];

export const Projects = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const projectEight = useRef();
  const testimonials = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight, testimonials, details];

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

      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Documatic"
        description="Innovative tool designed for codebase management. It functions as a search engine, allowing users to query their codebase and quickly find relevant code snippets and insights."
        buttonText="View project"
        buttonLink="/projects/documentic"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
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
        title="myhotelrebel."
        description="Innovative solution for hotels to manage room cleaning opt-outs using QR codes."
        buttonText="View project"
        buttonLink="/projects/hotel-rebel"
        model={{
          type: 'phone',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Unation"
        description="UNATION is a platform designed to simplify event discovery and promotion."
        buttonText="View project"
        buttonLink="/projects/unation"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTextureU, sprTextureLargeU],
              placeholder: sprTexturePlaceholderU,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Dronos"
        description="Aerodyne's Dronos is an advanced end-to-end drone service platform designed to optimize drone operations across various industries. It serves as a comprehensive solution for onboarding, analyzing, and deriving actionable insights from drone data, which is particularly beneficial for sectors such as telecommunications, agriculture, surveillance, logistics, and energy."
        buttonText="View project"
        buttonLink="/projects/dronos"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [dronos, dronos],
              placeholder: sprTexturePlaceholderU,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        alternate
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Pembroke"
        description="Your ultimate destination for a seamless and convenient grocery shopping experience."
        buttonText="View project"
        buttonLink="/projects/pembroke"
        model={{
          type: 'phone',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [gamestackTexture3, gamestackTexture3Large],
              placeholder: gamestackTexture3Placeholder,
            },
            {
              srcSet: [gamestackTexture4, gamestackTexture4Large],
              placeholder: gamestackTexture4Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="Clean Designs"
        description="Clean Designs sells and services commercial laundry equipment in Lakewood, CO. This custom site was built with .Net Framework / MVC / SQL. It feature custom authentication and content management features enabling users to add products, parts, project photos, project images and more!"
        buttonText="View project"
        buttonLink="/projects/clean-designs"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [cleanDesigns, cleanDesigns],
              placeholder: cleanDesigns,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-7"
        alternate
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={7}
        title="Financielle"
        description="Financielle is a continuously growing, supportive and uplifting financial wellness community."
        buttonText="View project"
        buttonLink="/projects/financielle"
        model={{
          type: 'phone',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [gamestackTexture5, gamestackTexture5Large],
              placeholder: gamestackTexture5Placeholder,
            },
            {
              srcSet: [gamestackTexture6, gamestackTexture6Large],
              placeholder: gamestackTexture6Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-8"
        sectionRef={projectEight}
        visible={visibleSections.includes(projectEight.current)}
        index={8}
        title="Best Deals"
        description="Looking for the best and suitable accommodation for your holiday? We are also an accommodation rental agency based in Bali and offer a worldwide selection of accommodation throughout Asia. We know the accommodation locally and inspect them before it is delivered or offered to you. We pick the collection by hand and list it on our website."
        buttonText="View project"
        buttonLink="/projects/best-deals"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [bestDeals, bestDeals],
              placeholder: bestDeals,
            },
          ],
        }}
      />
      <Testimonials
        sectionRef={testimonials}
        id="testimonials"
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer className={styles.homeFooter}/>
      </div>
    </div>
  );
};
