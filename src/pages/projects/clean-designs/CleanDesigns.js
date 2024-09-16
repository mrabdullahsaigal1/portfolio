import backgroundSprLarge from "assets/spr-background-large.jpg";
import backgroundSprPlaceholder from "assets/spr-background-placeholder.jpg";
import backgroundSpr from "assets/spr-background.jpg";
import imageSprLessonBuilderDarkLarge from "assets/clean-designs.png";
import imageSprLessonBuilderDarkPlaceholder from "assets/clean-designs.png";
import imageSprLessonBuilderDark from "assets/clean-designs.png";
import imageSprLessonBuilderLightLarge from "assets/clean-designs.png";
import imageSprLessonBuilderLightPlaceholder from "assets/clean-designs.png";
import imageSprLessonBuilderLight from "assets/clean-designs.png";
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
  "Clean Designs sells and services commercial laundry equipment in Lakewood, CO.";
const description =
  "This custom site was built with .Net Framework / MVC / SQL. It feature custom authentication and content management features enabling users to add products, parts, project photos, project images and more! In addition to building the site, I helped them by setting up and integrating Google Analytics, Google AdWords, and their Google Business listing.";
const roles = [
  "Web Design",
  "Microsoft Azure",
  "SQL",
  "ASP.NET MVC",
  "CSS 3",
  "Web Development",
  "Website Copywriting",
  "HTML5",
  "C#",
  "JavaScript",
];

export const CleanDesigns = () => {
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
          url="https://cleandesigns.com/"
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
            <ProjectSectionHeading>About Clean Designs</ProjectSectionHeading>
            <ProjectSectionText>
              Clean Designs operates as a provider of commercial laundry
              equipment in Lakewood, CO, offering both sales and servicing
              solutions. Their custom website, developed using .Net Framework,
              MVC, and SQL, stands as a testament to their commitment to
              efficient operations and user satisfaction. Boasting custom
              authentication and content management functionalities, the site
              empowers users to effortlessly add products, parts, project
              photos, and other relevant content. Beyond website development, I
              played a pivotal role in enhancing their online presence by
              setting up and seamlessly integrating key tools such as Google
              Analytics, Google AdWords, and their Google Business listing,
              thereby ensuring maximum visibility and effectiveness in their
              digital marketing endeavors.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
