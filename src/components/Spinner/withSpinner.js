import { useState, useEffect } from 'react';
import { useTheme } from 'components/ThemeProvider';
import Spinner from './Spinner';

const withSpinner = (WrappedComponent) => {
  return function WithLoaderComponent(props) {
    const [loading, setLoading] = useState(true);
    const theme = useTheme();

    useEffect(() => {
      const handleLoad = () => {
        setLoading(false);
      };

      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
      }

      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }, []);

    if (loading) {
      return <Spinner themeId={theme.themeId} />;
    }

    return <WrappedComponent {...props} />; 
  };
};

export default withSpinner;