import { Helmet } from 'react-helmet-async';
import HomeHero from './components/HomeHero';
import HomeUs from './components/HomeUs';
import HomeServices from './components/HomeServices';
import HomeWho from './components/HomeWho';
import HomeTeam from './components/HomeTeam';
import Footer from '../../components/footer/Footer';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import HomeProducts from './components/HomeProducts';

const Home = () => {
  const state = useLocation();
  const id = state.hash || '';

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Főoldal - Sawin Energy</title>
      </Helmet>
      <HomeHero />
      <HomeUs />
      <HomeServices />
      <HomeProducts />
      <HomeWho />
      <HomeTeam />
      <Footer />
    </>
  );
};

export default Home;
