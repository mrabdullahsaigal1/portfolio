import useAutoScroll from '../components/Hooks/useAutoScroll';

const Layout = ({ children }) => {
  useAutoScroll();

  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;
