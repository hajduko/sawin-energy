import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/Footer';
import HomeHero from './components/HomeHero';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Főoldal - Sawin Energy</title>
      </Helmet>
      <HomeHero />

      <Footer />
    </>
  );
};

export default Home;
