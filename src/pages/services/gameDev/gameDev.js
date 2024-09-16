import { useState, useEffect, useRef } from 'react';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Footer } from 'components/Footer';
import { Intro } from './Intro';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import styles from './gameDev.module.css';

import thatQuestionGameImage from '/public/ThatQuestionGame.png';
import thatQuestionGameImageLarge from '/public/ThatQuestionGame.png';
import thatQuestionGameImagePlaceholder from '/public/ThatQuestionGame.png';
import monsterHuntImage from '/public/MonsterHunt.png';
import monsterHuntImageLarge from '/public/MonsterHunt.png';
import monsterHuntImagePlaceholder from '/public/MonsterHunt.png';
import deerHunterImage from '/public/DeerHunter1.png';
import deerHunterImageLarge from '/public/DeerHunter1.png';
import deerHunterImagePlaceholder from '/public/DeerHunter1.png';
import iqMissionImage from '/public/IqMission1.png';
import iqMissionImageLarge from '/public/IqMission1.png';
import iqMissionImagePlaceholder from '/public/IqMission1.png';
import carRaceImage from '/public/CarRace1.png';
import carRaceImageLarge from '/public/CarRace1.png';
import carRaceImagePlaceholder from '/public/CarRace1.png';

const disciplines = [
  'That Question',
  'Monster Hunt',
  'Deer Hunting',
  'IQMission 2',
  'Action Car Race'
];

export const gameDev = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive];

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
        title="Game Development Projects"
        description="Showcasing our cutting-edge game development expertise"
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
          title="That Question Game - Interactive Gaming Experience"
          description="An interactive game that encourages creative gameplay, expressive responses, and global multiplayer experiences."
          buttonText="View Game"
          buttonLink="https://thatquestiongame.com"
          model={{
            type: 'laptop',
            alt: 'That Question Game',
            textures: [
              {
                srcSet: [thatQuestionGameImage, thatQuestionGameImageLarge],
                placeholder: thatQuestionGameImagePlaceholder,
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
          title="Monster Hunt - Immersive FPS Game"
          description="A thrilling first-person shooter game where players combat monsters to protect the city, designed with engaging gameplay and complex AI behaviors."
          buttonText="View Game"
          buttonLink="https://monsterhuntgame.com"
          model={{
            type: 'laptop',
            alt: 'Monster Hunt game',
            textures: [
              {
                srcSet: [monsterHuntImage, monsterHuntImageLarge],
                placeholder: monsterHuntImagePlaceholder,
              },
            ],
          }}
        />
        <ProjectSummary
          id="project-3"
          sectionRef={projectThree}
          visible={visibleSections.includes(projectThree.current)}
          index={3}
          title="Deer Hunting - Jungle Adventure Game"
          description="An adventure hunting game set in the jungle, where players track and hunt deer in a realistic environment."
          buttonText="View Game"
          buttonLink="https://deerhunting.com"
          model={{
            type: 'laptop',
            alt: 'Deer Hunting game',
            textures: [
              {
                srcSet: [deerHunterImage, deerHunterImageLarge],
                placeholder: deerHunterImagePlaceholder,
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
          title="IQMission 2 - Logic-Based Puzzler"
          description="A logic-based puzzle game that challenges players with different gameplay styles in each world, created to test and enhance problem-solving skills."
          buttonText="View Game"
          buttonLink="https://iqmission2.com"
          model={{
            type: 'laptop',
            alt: 'IQMission 2 game',
            textures: [
              {
                srcSet: [iqMissionImage, iqMissionImageLarge],
                placeholder: iqMissionImagePlaceholder,
              },
            ],
          }}
        />
        <ProjectSummary
          id="project-5"
          sectionRef={projectFive}
          visible={visibleSections.includes(projectFive.current)}
          index={5}
          title="Action Car Race - Fast-Paced Racing Game"
          description="A fast-paced racing game featuring intense action and dynamic gameplay, designed to offer a thrilling racing experience."
          buttonText="View Game"
          buttonLink="https://actioncarrace.com"
          model={{
            type: 'laptop',
            alt: 'Action Car Race game',
            textures: [
              {
                srcSet: [carRaceImage, carRaceImageLarge],
                placeholder: carRaceImagePlaceholder,
              },
            ],
          }}
        />
      </div>
      <Footer />
    </div>
  );
};
