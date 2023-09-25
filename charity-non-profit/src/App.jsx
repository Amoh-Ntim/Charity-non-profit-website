import './App.css'
import{ useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar'
import HamburgerMenu from './Navbar/Hamburger';
import Hero1 from './Hero/Hero1';

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check the screen width when the component mounts and on resize
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 840); // Adjust the breakpoint as needed
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      {isSmallScreen ? <HamburgerMenu /> : <Navbar />}
      <Hero1 />
    </div>
  )
}

export default App