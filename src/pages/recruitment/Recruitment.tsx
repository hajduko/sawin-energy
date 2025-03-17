import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import RecruitmentHero from './components/RecruitmentHero';
import RecruitmentAdvantage from './components/RecruitmentAdvantage';
import RecruitmentPositions from './components/RecruitmentPositions';
import RecruitmentForm from './components/RecruitmentForm';
import Footer from '../../components/footer/Footer';
import RecruitmentFeedBackPopUp from '../../components/recruitmentfeedbackpopup/RecruitmentFeedBackPopUp';

const Recruitment = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <>
      <Helmet>
        <title>Toborzás - Sawin Energy</title>
      </Helmet>
      <RecruitmentFeedBackPopUp open={dialogOpen} setOpen={setDialogOpen} />
      <RecruitmentHero />
      <RecruitmentAdvantage />
      <RecruitmentPositions />
      <RecruitmentForm setFeedBackOpen={setDialogOpen} />
      <Footer />
    </>
  );
};

export default Recruitment;
