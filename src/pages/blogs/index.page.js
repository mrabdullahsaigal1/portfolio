import { blogs } from './blogs-data';

export { Blogs as default } from './blogs';

export function getStaticProps() {
  return {
    props: { blogs },
  };
}
