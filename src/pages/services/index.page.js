import { services } from './services-data';

export { Services as default } from './services';

export function getStaticProps() {
  return {
    props: { services },
  };
}
