import s from './HomeLayout.module.scss';
import Header from '../../components/Header/Header';
import Particles from '../../components/UIElements/Particles/Particles';
import Footer from '../../components/Footer/Footer';
import MainNavigation from '../../components/Navigation/MainNavigation/MainNavigation';
import Mode from '../../components/mode';
const HomeLayout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Particles />
      <Header>
        <Mode />

        <MainNavigation />
      </Header>

      {children}

      <Footer />
    </div>
  );
};

export default HomeLayout;
