import { Helmet } from 'react-helmet-async';
import RecruitmentHero from './components/RecruitmentHero';
import RecruitmentAdvantage from './components/RecruitmentAdvantage';
import RecruitmentPositions from './components/RecruitmentPositions';
import RecruitmentForm from './components/RecruitmentForm';
import Footer from '../../components/footer/Footer';

const Recruitment = () => {
  return (
    <>
      <Helmet>
        <title>Toborzás - Sawin Energy</title>
      </Helmet>
      <RecruitmentHero />
      <RecruitmentAdvantage />
      <RecruitmentPositions />
      <RecruitmentForm />
      <Footer />
    </>
  );
};

export default Recruitment;
