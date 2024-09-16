import { testimonials } from './testimonials-data';

export { Testimonials as default } from './testimonials';

export function getStaticProps() {
  return {
    props: { testimonials },
  };
}
