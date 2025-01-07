import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/Footer';
import HomeHero from './components/HomeHero';
import HomeUs from './components/HomeUs';
import HomeServices from './components/HomeServices';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Főoldal - Sawin Energy</title>
      </Helmet>
      <HomeHero />
      <HomeUs />
      <HomeServices />
      <Footer />
    </>
  );
};

export default Home;
