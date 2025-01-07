import { Helmet } from 'react-helmet-async';
import HomeHero from './components/HomeHero';
import HomeUs from './components/HomeUs';
import HomeServices from './components/HomeServices';
import HomeWho from './components/HomeWho';
import HomeTeam from './components/HomeTeam';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Főoldal - Sawin Energy</title>
      </Helmet>
      <HomeHero />
      <HomeUs />
      <HomeServices />
      <HomeWho />
      <HomeTeam />
      <Footer />
    </>
  );
};

export default Home;
