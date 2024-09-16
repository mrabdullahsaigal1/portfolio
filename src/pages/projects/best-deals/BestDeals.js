import backgroundSprLarge from "assets/spr-background-large.jpg";
import backgroundSprPlaceholder from "assets/spr-background-placeholder.jpg";
import backgroundSpr from "assets/spr-background.jpg";
import imageSprLessonBuilderDarkLarge from "assets/best-deals.png";
import imageSprLessonBuilderDarkPlaceholder from "assets/best-deals.png";
import imageSprLessonBuilderDark from "assets/best-deals.png";
import imageSprLessonBuilderLightLarge from "assets/best-deals.png";
import imageSprLessonBuilderLightPlaceholder from "assets/best-deals.png";
import imageSprLessonBuilderLight from "assets/best-deals.png";
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

const title = "For the best and suitable accommodation for holiday.";
const description =
  "Looking for the best and suitable accommodation for your holiday? We are also an accommodation rental agency based in Bali and offer a worldwide selection of accommodation throughout Asia. We know the accommodation locally and inspect them before it is delivered or offered to you. We pick the collection by hand and list it on our website.";
const roles = [
  "Front-End Development",
  "Web Development",
  "Mobile App Development",
  "Back-End Development",
  "RESTful API",
  "Google Cloud Platform",
];

export const BestDeals = () => {
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
          url="https://bestdealsasiarentals.com/"
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
            <ProjectSectionHeading>About Best Deals</ProjectSectionHeading>
            <ProjectSectionText>
              Are you on the hunt for the ideal accommodation to make your
              holiday unforgettable? Look no further! As a specialized
              accommodation rental agency headquartered in Bali, we offer an
              extensive range of meticulously handpicked properties across Asia
              and beyond. Leveraging our deep local knowledge, we personally
              inspect each property before listing it to ensure it meets our
              high standards of quality and comfort. From luxurious villas to
              cozy apartments, our diverse selection caters to various needs and
              preferences, ensuring that what you see is exactly what you get.
              Our commitment to excellence and detail guarantees reliable,
              top-notch accommodations, making your travel planning seamless and
              your stay truly memorable.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
