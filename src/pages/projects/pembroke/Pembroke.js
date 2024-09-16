import backgroundSprLarge from "assets/spr-background-large.jpg";
import backgroundSprPlaceholder from "assets/spr-background-placeholder.jpg";
import backgroundSpr from "assets/spr-background.jpg";
import imageSprLessonBuilderDarkLarge from "assets/Pembroke.png";
import imageSprLessonBuilderDarkPlaceholder from "assets/Pembroke.png";
import imageSprLessonBuilderDark from "assets/Pembroke.png";
import imageSprLessonBuilderLightLarge from "assets/Pembroke.png";
import imageSprLessonBuilderLightPlaceholder from "assets/Pembroke.png";
import imageSprLessonBuilderLight from "assets/Pembroke.png";
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

const title = "Pembroke";
const description =
  "Welcome to Pembroke Food Store Online – your ultimate destination for a seamless and convenient grocery shopping experience! At Pembroke Food Store, we bring the local grocery store right to your fingertips, providing a diverse range of quality products and essentials that cater to your daily needs.";
const roles = [
  "Payment Functionality",
  "Android App Development",
  "Android",
  "Firebase",
  "iOS",
  "iOS Development",
  "Mobile App Development",
  "Mobile App Design",
  "MongoDB",
  "Native App Development",
];

export const Pembroke = () => {
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
          url="https://pembrokefoodstore.com/"
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
            <ProjectSectionHeading>About Pembroke</ProjectSectionHeading>
            <ProjectSectionText>
              Embark on a journey of unparalleled convenience with Pembroke Food
              Store Online, where the essence of your local grocery store
              seamlessly merges with the digital realm. From fresh produce to
              pantry staples, our expansive selection caters to every aspect of
              your daily needs. Explore our diverse range of premium products,
              meticulously curated to uphold the highest standards of quality,
              ensuring satisfaction with every purchase. Experience the perfect
              fusion of accessibility and excellence, as we bring the
              convenience of a traditional grocery store directly to your
              fingertips, promising a fulfilling shopping experience that
              transcends expectations.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
