import homeimg from '../../images/homeimg.jpg';
import '../../styles/Home.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Skills from '../../components/Skills';
import Aboutme from '../../components/Aboutme';
import TypingAnimation from '../../components/TypingAnimation';

function Home() {
  return(
    <div className='home'>
      <div className="home__banner__main">
        <div className='home__padding'>
          <Header/>
          <div className='homeimgback'>
            <img src={homeimg} alt='Nicolas Verez, développeur fullstack' className='homeimg'/>
            <TypingAnimation/>
          </div>
          <Aboutme/>
          <Skills/>
        </div>
      </div>
      <Footer/>
    </div>

  )
};

export default Home;
