import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageSprLessonBuilderDarkLarge from 'assets/Dronos.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/Dronos.jpg';
import imageSprLessonBuilderDark from 'assets/Dronos.jpg';
import imageSprLessonBuilderLightLarge from 'assets/Dronos.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/Dronos.jpg';
import imageSprLessonBuilderLight from 'assets/Dronos.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { useTheme } from 'components/ThemeProvider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';

const title = 'DRONOS helps users manage their drone fleet';
const description =
"Aerodyne's DRONOS software is an end-to-end drone service platform that is designed to be used throughout the entire workflow of a drone operation [2]. Here are some of the key features of DRONOS"
const roles = [
  'Art Direction',
  'UX and UI Design',
  'Front End Development',
  'Backend Development',
  'CI/CD pipline',
];

export const dronos = () => {
  const { themeId } = useTheme();

  const isDark = themeId === 'dark';

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://telco.dronos.ai/login"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprLessonBuilderDark, imageSprLessonBuilderDarkLarge]
                  : [imageSprLessonBuilderLight, imageSprLessonBuilderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>About Dronos</ProjectSectionHeading>
            <ProjectSectionText>
            Aerodyne's DRONOS software is an end-to-end drone service platform that is designed to be used throughout the entire workflow of a drone operation [2]. Here are some of the key features of DRONOS
            </ProjectSectionText>
            <ProjectSectionText>
            Onboarding: DRONOS helps users manage their drone fleet, including pilot certifications, drone maintenance logs, and regulatory compliance [2].
            </ProjectSectionText>
            <ProjectSectionText>
            Data analysis: DRONOS provides tools to analyze the data collected by drones. This data can be used to generate reports, identify trends, and make better decisions about drone operations [2].
            </ProjectSectionText>
            <ProjectSectionText>
            AI integration: DRONOS integrates with artificial intelligence (AI) to automate tasks and improve the efficiency of drone operations. For example, AI can be used to analyze drone data to identify defects in infrastructure or crops [2].
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
