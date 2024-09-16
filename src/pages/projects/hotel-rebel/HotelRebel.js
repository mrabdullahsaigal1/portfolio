import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageSprLessonBuilderDarkLarge from 'assets/hotelrebel-03.png';
import imageSprLessonBuilderDarkPlaceholder from 'assets/hotelrebel-03.png';
import imageSprLessonBuilderDark from 'assets/hotelrebel-03.png';
import imageSprLessonBuilderLightLarge from 'assets/hotelrebel-03.png';
import imageSprLessonBuilderLightPlaceholder from 'assets/hotelrebel-03.png';
import imageSprLessonBuilderLight from 'assets/hotelrebel-03.png';
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

const title =
  ' innovative solution for hotels to manage room cleaning opt-outs using QR codes.';
const description =
  'Offers a simple yet effective system for guests to forgo daily room cleaning, aiding in reducing operational costs and environmental impact.';
const roles = [
  'Art Direction',
  'UX and UI Design',
  'Front End Development',
  'Backend Development',
  'CI/CD pipline',
];

export const HotelRebel = () => {
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
          url="https://myhotelrebel.com"
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
            <ProjectSectionHeading>About My Hotel Rebel</ProjectSectionHeading>
            <ProjectSectionText>
              The landing page presents an innovative solution for hotels to manage room
              cleaning opt-outs using QR codes. It offers a simple yet effective system
              for guests to forgo daily room cleaning, aiding in reducing operational
              costs and environmental impact. The platform is designed to be
              user-friendly, with an easy setup and low setup costs. It not only
              simplifies hotel processes but also provides a digital, intuitive approach
              to managing room cleaning preferences, thereby enhancing both guest
              experience and hotel operations. It also had a dashboard that is designed as
              a central control panel for the hotel management to monitor and manage room
              cleaning opt-outs. It provides a comprehensive and real-time overview of
              guest preferences regarding room cleaning, allowing for efficient allocation
              of housekeeping resources. The interface is intuitive and user-friendly,
              aimed at simplifying the management process for hotel staff. This dashboard
              represents a key component in streamlining hotel operations and enhancing
              guest satisfaction. For further information and a detailed view
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
