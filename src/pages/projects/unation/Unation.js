import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageSprLessonBuilderDarkLarge from 'assets/unation-01.png';
import imageSprLessonBuilderDarkPlaceholder from 'assets/unation-01.png';
import imageSprLessonBuilderDark from 'assets/unation-01.png';
import imageSprLessonBuilderLightLarge from 'assets/unation-01.png';
import imageSprLessonBuilderLightPlaceholder from 'assets/unation-01.png';
import imageSprLessonBuilderLight from 'assets/unation-01.png';
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

const title = 'UNATION is a platform designed to simplify event discovery and promotion.';
const description =
  'Unation provides a user-friendly interface for users to find, create, and share events of various types, catering to a diverse range of interests and activities.';
const roles = [
  'Art Direction',
  'UX and UI Design',
  'Front End Development',
  'Backend Development',
  'CI/CD pipline',
];

export const Unation = () => {
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
          url="https://www.unation.com/"
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
            <ProjectSectionHeading>About UNATION</ProjectSectionHeading>
            <ProjectSectionText>
              Documatic is an innovative tool designed for codebase management. It
              functions as a search engine, allowing users to query their codebase and
              quickly find relevant code snippets and insights. This platform offers
              features like dependency mapping for visualizing important codebase
              infrastructure interactions, and codebase reporting to document changes
              daily, weekly, or monthly. It integrates seamlessly, enabling sharing of
              insights within teams. Documatic positions itself as a more efficient
              alternative to consulting superiors, aiming to expedite problem-solving and
              enhance coding productivityUnation provides a user-friendly interface for
              users to find, create, and share events of various types, catering to a
              diverse range of interests and activities. The website aims to connect
              people through events, fostering community engagement and enabling easy
              access to local happenings. Whether for personal enjoyment, community
              involvement, or business events, UNATION offers a comprehensive solution for
              event management and discovery.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
