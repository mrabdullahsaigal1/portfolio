import backgroundSprLarge from "assets/spr-background-large.jpg";
import backgroundSprPlaceholder from "assets/spr-background-placeholder.jpg";
import backgroundSpr from "assets/spr-background.jpg";
import imageSprLessonBuilderDarkLarge from "assets/financielle.png";
import imageSprLessonBuilderDarkPlaceholder from "assets/financielle.png";
import imageSprLessonBuilderDark from "assets/financielle.png";
import imageSprLessonBuilderLightLarge from "assets/financielle.png";
import imageSprLessonBuilderLightPlaceholder from "assets/financielle.png";
import imageSprLessonBuilderLight from "assets/financielle.png";
import { Footer } from "components/Footer";
import { Meta } from "components/Meta";
import { useTheme } from "components/ThemeProvider";
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
} from "layouts/Project";
import { Fragment } from "react";
import { media } from "utils/style";

const title =
  " Financielle is a continuously growing, supportive and uplifting financial wellness community.";
const description =
  "What started off as an Instagram page back in 2018, Financielle is a continuously growing, supportive and uplifting financial wellness community. This app is developed to bring together individuals who want to take charge of their money, whether it is getting out of debt, establishing strong financial foundations, or developing generational wealth.";
const roles = ["iOS Development", "Android App Development"];

export const Financielle = () => {
  const { themeId } = useTheme();

  const isDark = themeId === "dark";

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
          url="https://www.financielle.co.uk/"
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
                  : [
                      imageSprLessonBuilderLight,
                      imageSprLessonBuilderLightLarge,
                    ]
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
            <ProjectSectionHeading>About Financielle</ProjectSectionHeading>
            <ProjectSectionText>
              Originally launched as an Instagram page in 2018, Financielle has
              since blossomed into a vibrant and empowering financial wellness
              community. This innovative app is crafted to unite individuals who
              are determined to gain control over their finances. Whether users
              are aiming to eliminate debt, lay down solid financial
              foundations, or cultivate generational wealth, Financielle
              provides the tools and support they need. The platform fosters a
              supportive and encouraging environment, offering valuable
              resources and a sense of community that empowers users to achieve
              their financial goals. By connecting like-minded individuals,
              Financielle not only facilitates financial education and growth
              but also inspires a collective journey towards financial
              well-being and prosperity.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
