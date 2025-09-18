// React imports
import { useEffect } from 'react';

// App imports
import { Panel } from './panel'; 
import { MapView } from './map';
import { Tools } from './tools';
import { Views } from './views';
import './styles.scss';

// Context imports
import { ContextProvider } from 'context';

export const App = () => {
  useEffect(() => {
    const handleResize = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ContextProvider>
      <div className="App"> 
        <Panel/>
        <div className="map">
          <Views/>
          <MapView/>
          <Tools/>
        </div>
      </div>
    </ContextProvider>
  );
};

App.displayName = "App";