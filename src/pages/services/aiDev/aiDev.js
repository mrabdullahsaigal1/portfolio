import { useState, useEffect, useRef } from 'react';
import { Meta } from 'components/Meta';
import { Intro } from './Intro';
import { Section } from 'components/Section';
import { Footer } from 'components/Footer';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import styles from './aiDev.module.css';

import tytonyxImage from '/public/tytonyx.png';
import tytonyxImageLarge from '/public/tytonyx.png';
import tytonyxImagePlaceholder from '/public/tytonyx.png';
import fortunAiImage from '/public/FortunAi.png';
import fortunAiImageLarge from '/public/FortunAi.png';
import fortunAiImagePlaceholder from '/public/FortunAi.png';
import justLearnImage from '/public/justlearn.png';
import justLearnImageLarge from '/public/justlearn.png';
import justLearnImagePlaceholder from '/public/justlearn.png';
import conversationAiImage from '/public/ConversationAi.png';
import conversationAiImageLarge from '/public/ConversationAi.png';
import conversationAiImagePlaceholder from '/public/ConversationAi.png';

const disciplines = [
  'Tytonyx',
  'FortunAI',
  'JustLearn',
  'Conversational'
];

export const aiDev = () => {
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
        title="AI Development"
        description="Our AI Development Projects at Gensols"
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
          title="Tytonyx - AI Healthcare Management"
          description="Our team developed an AI chatbot integrated into the client's website, allowing secure upload and analysis of medical documents. Using advanced algorithms and natural language processing, it ensures easy interaction and enhanced productivity."
          buttonText="View Project"
          buttonLink="https://tytonyx.com"
          model={{
            type: 'laptop',
            alt: 'Tytonyx AI project',
            textures: [
              {
                srcSet: [tytonyxImage, tytonyxImageLarge],
                placeholder: tytonyxImagePlaceholder,
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
          title="FortunAI - Personalized Tax Planning"
          description="FortunAI leverages AI to analyze financial profiles and tailor personalized tax-saving strategies, optimizing tax outcomes with unique, effective recommendations."
          buttonText="View Project"
          buttonLink="https://fortunai.com"
          model={{
            type: 'laptop',
            alt: 'FortunAI project',
            textures: [
              {
                srcSet: [fortunAiImage, fortunAiImageLarge],
                placeholder: fortunAiImagePlaceholder,
              },
            ],
          }}
        />
        <ProjectSummary
          id="project-3"
          sectionRef={projectThree}
          visible={visibleSections.includes(projectThree.current)}
          index={3}
          title="JustLearn - AI Learning Companion"
          description="JustLearn is your AI companion that helps you learn languages and more with a personalized touch, offering tailored advice and motivation through advanced AI technology."
          buttonText="View Project"
          buttonLink="https://justlearn.com"
          model={{
            type: 'laptop',
            alt: 'JustLearn AI project',
            textures: [
              {
                srcSet: [justLearnImage, justLearnImageLarge],
                placeholder: justLearnImagePlaceholder,
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
          title="Conversational AI - Speech to Speech Model"
          description="Our speech-to-speech model simulates human-like interactions, providing versatile AI-driven support across various customer interaction scenarios without latency."
          buttonText="View Project"
          buttonLink="https://conversationai.com"
          model={{
            type: 'laptop',
            alt: 'Conversational AI project',
            textures: [
              {
                srcSet: [conversationAiImage, conversationAiImageLarge],
                placeholder: conversationAiImagePlaceholder,
              },
            ],
          }}
        />
      </div>
      <Footer />
    </div>
  );
};