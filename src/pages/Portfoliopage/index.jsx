import Header from '../../components/Header';
import '../../styles/Header.scss';
import landimg from '../../images/aboutimg.jpg';
import Collapse from '../../components/Collapse';
import Footer from '../../components/Footer'
import '../../styles/Portfoliopage.scss'
import Card from '../../components/Card';

function PortfolioPage() {
    return (
        <div className='portfolio'>
            <Header/>
            <Card/>

        </div>
    )
}

export default PortfolioPage;