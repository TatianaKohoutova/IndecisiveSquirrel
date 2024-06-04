import { Header } from '../Components/Header';
import { AboutUs } from '../AboutUs/about';
import { AboutGame } from '../AboutGame/game';
import { Footer } from '../Components/Footer';

import './global.css';
export const HomePage = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <AboutGame />
      <Footer />
    </>
  );
};
