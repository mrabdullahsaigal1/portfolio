import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { Testimonials } from "components/Testimonials/testimonials";
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import { Section } from 'components/Section';
import webImage from '../../../public/static/web-dev.png';
import webImageLarge from '../../../public/static/web-dev.png';
import webImagePlaceholder from '../../../public/static/web-dev.png';
import aiDevImage from '../../../public/static/ai-dev.png';
import aiDevImageLarge from '../../../public/static/ai-dev.png';
import aiDevImagePlaceholder from '../../../public/static/ai-dev.png';
import blockChainImage from '../../../public/static/blockchain-dev.png';
import blockChainImageLarge from '../../../public/static/blockchain-dev.png';
import blockChainImagePlaceholder from '../../../public/static/blockchain-dev.png';
import DMImage from '../../../public/static/digital.png';
import DMImageLarge from '../../../public/static/digital.png';
import DMImagePlaceholder from '../../../public/static/digital.png';
import mobileDevImage from '../../../public/static/mobile-app-dev.jpeg';
import mobileDevImageLarge from '../../../public/static/mobile-app-dev.jpeg';
import mobileDevImagePlaceholder from '../../../public/static/mobile-app-dev.jpeg';
import WPImage from '../../../public/static/wpshopify-dev.png';
import WPImageLarge from '../../../public/static/wpshopify-dev.png';
import WPImagePlaceholder from '../../../public/static/wpshopify-dev.png';
import gameDevImage from '../../../public/static/game-dev.png';
import gameDevImageLarge from '../../../public/static/game-dev.png';
import gameDevImagePlaceholder from '../../../public/static/game-dev.png';
import itStaffingImage from '../../../public/static/it-staffing.png';
import itStaffingImageLarge from '../../../public/static/it-staffing.png';
import itStaffingImagePlaceholder from '../../../public/static/it-staffing.png';
import gamestackTexture2Large from 'assets/hotelrebel-02.png';
import gamestackTexture2Placeholder from 'assets/hotelrebel-02.png';
import gamestackTexture2 from 'assets/hotelrebel-02.png';
import gamestackTextureLarge from 'assets/hotelrebel-01.png';
import gamestackTexturePlaceholder from 'assets/hotelrebel-01.png';
import gamestackTexture from 'assets/hotelrebel-01.png';

const disciplines = [
  'Web App Development',
  'Mobile App Development',
  'Blockchain Development',
  'IT Staffing',
  'AI Development',
  ,
];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const serviceOne = useRef();
  const serviceTwo = useRef();
  const serviceThree = useRef();
  const serviceFour = useRef();
  const serviceFive = useRef();
  const serviceSix = useRef();
  const serviceSeven = useRef();
  const serviceEight = useRef();

  useEffect(() => {
    const sections = [intro, serviceOne, serviceTwo, serviceThree, serviceFour, serviceFive, serviceSix, serviceSeven, serviceEight];

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
        title="Gensols"
        description="We craft digital experiences that combine design and technology."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <div className={styles.projectSummary}>

      <ProjectSummary
        key={1}
        id="service-1"
        sectionRef={serviceOne}
        visible={visibleSections.includes(serviceOne.current)}
        index={1}
        title="Web Development"
        description="Gensols specializes in top-tier web development using technologies like ReactJS, Vue.js, Angular, and Node.js to build visually appealing, robust websites. Our team stays ahead of digital trends, ensuring your website effectively meets modern needs. Trust Gensols for standout results and an enhanced online presence."
        buttonText="View projects"
        buttonLink="/services/webDev/"
        model={{
          type: 'laptop',
          alt: 'GenSols Blockchain development',
          textures: [
            {
              srcSet: [webImage, webImageLarge],
              placeholder: webImagePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="service-2"
        alternate
        sectionRef={serviceTwo}
        visible={visibleSections.includes(serviceTwo.current)}
        index={2}
        title="AI Development"
        description="We deliver advanced AI services that enhance business efficiency and growth, specializing in machine learning, natural language processing, and predictive analytics. Our tailored solutions automate processes and improve decision-making, driving long-term success. Partner with us to leverage AI and transform your operations."
        buttonText="View projects"
        buttonLink="/services/aiDev/"
        model={{
          type: 'laptop',
          alt: 'GenSols AI Development',
          textures: [
            {
              srcSet: [aiDevImage, aiDevImageLarge],
              placeholder: aiDevImagePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="service-3"
        sectionRef={serviceThree}
        visible={visibleSections.includes(serviceThree.current)}
        index={3}
        title="Blockchain Development"
        description="Explore the future with Gensols' advanced blockchain services. Our experts deliver secure, innovative, and scalable solutions, from smart contracts to decentralized applications. Trust Gensols to elevate your business with cutting-edge blockchain technology, ensuring a competitive edge in the digital world."
        buttonText="View projects"
        buttonLink="/services/blockchainDev/"
        model={{
          type: 'laptop',
          alt: 'GenSols Blockchain development',
          textures: [
            {
              srcSet: [blockChainImage, blockChainImageLarge],
              placeholder: blockChainImagePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="service-4"
        alternate
        sectionRef={serviceFour}
        visible={visibleSections.includes(serviceFour.current)}
        index={4}
        title="Digital Marketing"
        description="We offer a full suite of services to enhance your online visibility and drive results. Our strategies include performance marketing to optimize ROI, social media management for audience growth, expert Google and Meta Ads for maximum visibility, targeted Snapchat Ads, SEO to improve site ranking, and influencer marketing to expand reach and credibility."
        buttonText="View projects"
        buttonLink="/services/digitalMarketing/"
        model={{
          type: 'laptop',
          alt: 'GenSols Digital marketing services',
          textures: [
            {
              srcSet: [DMImage, DMImageLarge],
              placeholder: DMImagePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="service-5"
        sectionRef={serviceFive}
        visible={visibleSections.includes(serviceFive.current)}
        index={5}
        title="Mobile Development"
        description="We offer essential mobile app services to boost your digital strategy. Our experts create intuitive, high-performance apps using advanced technologies like React Native and Flutter. Trust us to enhance customer engagement and drive your business growth with cutting-edge mobile solutions."
        buttonText="View projects"
        buttonLink="/services/mobileDev/"
        style={{
          marginTop: '20px',
          marginBottom: '20px'
        }}
        model={{
          type: 'phone',
          alt: 'GenSols mobile development',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="service-6"
        alternate
        sectionRef={serviceSix}
        visible={visibleSections.includes(serviceSix.current)}
        index={6}
        title="WordPress / Shopify"
        description="GENSOLS offers expert WordPress and Shopify development services. Our team delivers customized, high-performance websites and e-commerce platforms tailored to your specific needs, focusing on user experience and scalability to drive business results. Trust us to elevate your online presence."
        buttonText="View projects"
        buttonLink="/services/wordpressShopify/"
        model={{
          type: 'laptop',
          alt: 'GenSols Wordpress / shopify services',
          textures: [
            {
              srcSet: [WPImage, WPImageLarge],
              placeholder: WPImagePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="service-7"
        sectionRef={serviceSeven}
        visible={visibleSections.includes(serviceSeven.current)}
        index={7}
        title="Game Development"
        description="Dive into game development with Gensols. Our experts create immersive experiences tailored to your audience using cutting-edge technology. From mobile to console, we ensure every game is captivating from concept to launch. Trust Gensols to bring your gaming visions to life with precision and creativity."
        buttonText="View projects"
        buttonLink="/services/gameDev/"
        model={{
          type: 'laptop',
          alt: 'GenSols Geme Development',
          textures: [
            {
              srcSet: [gameDevImage, gameDevImageLarge],
              placeholder: gameDevImagePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="service-8"
        alternate
        sectionRef={serviceEight}
        visible={visibleSections.includes(serviceEight.current)}
        index={8}
        title="IT Staffing"
        description="GENSOLS leads in digital marketing, specializing in web data extraction that transforms raw data into actionable insights. Our advanced techniques ensure precise, efficient services, empowering you to optimize strategies and stay ahead. Trust GENSOLS for impactful solutions that drive growth and success."
        buttonText="View projects"
        buttonLink="/services/itStaffing/"
        model={{
          type: 'laptop',
          alt: 'GenSols IT staffing services',
          textures: [
            {
              srcSet: [itStaffingImage, itStaffingImageLarge],
              placeholder: itStaffingImagePlaceholder,
            },
          ],
        }}
      />
      <Footer className={styles.homeFooter}/>
      </div>
    </div>
  );
};
