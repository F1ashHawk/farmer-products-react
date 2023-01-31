import Benefits from '../../blocks/benefits/benefits';
import MainIntro from '../../blocks/main-intro/main-intro';
import benefits from '../../../mocks/benefits';

export default function MainPage() {
  return (
    <>
      <MainIntro />
      <Benefits benefits={benefits} />
    </>
  );
}
