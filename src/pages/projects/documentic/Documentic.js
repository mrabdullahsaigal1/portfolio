import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageSprLessonBuilderDarkLarge from 'assets/documentic.png';
import imageSprLessonBuilderDarkPlaceholder from 'assets/documentic.png';
import imageSprLessonBuilderDark from 'assets/documentic.png';
import imageSprLessonBuilderLightLarge from 'assets/documentic.png';
import imageSprLessonBuilderLightPlaceholder from 'assets/documentic.png';
import imageSprLessonBuilderLight from 'assets/documentic.png';
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

const title = 'Innovative tool designed for codebase management.';
const description =
  'Documatic is an innovative tool designed for codebase management. It functions as a search engine, allowing users to query their codebase and quickly find relevant code snippets and insights. ';
const roles = [
  'Art Direction',
  'UX and UI Design',
  'Front End Development',
  'Backend Development',
  'CI/CD pipline',
];

export const Documentic = () => {
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
          url="https://documatic.com/"
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
            <ProjectSectionHeading>About Documentic</ProjectSectionHeading>
            <ProjectSectionText>
              Documatic is an innovative tool designed for codebase management. It
              functions as a search engine, allowing users to query their codebase and
              quickly find relevant code snippets and insights. This platform offers
              features like dependency mapping for visualizing important codebase
              infrastructure interactions, and codebase reporting to document changes
              daily, weekly, or monthly. It integrates seamlessly, enabling sharing of
              insights within teams. Documatic positions itself as a more efficient
              alternative to consulting superiors, aiming to expedite problem-solving and
              enhance coding productivity
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
