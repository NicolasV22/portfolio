import homeimg from '../../images/homeimg.jpg';
import '../../styles/Home.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';

function Home() {
  return(
    <div className='home'>
      <div className="home__banner__main">
        <div className='home__padding'>
          <Header/>
          <div className='homeimgback'>
            <img src={homeimg} alt='photographie de côte marine forestière' className='homeimg'/>
          </div>
          <Card/>
        </div>
      </div>
      <Footer/>
    </div>

  )
};

export default Home;
