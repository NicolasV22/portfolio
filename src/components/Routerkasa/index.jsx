import Portfolio from '../../pages/Portfolio';
import Error from '../../pages/Error';
import Home from '../../pages/Home'
import PortfolioPage from '../../pages/Portfoliopage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Routerkasa(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Portfoliopage" element={<PortfolioPage />} />
                <Route path="/Portfolio/:id" element={<Portfolio />}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
  
        </Router>
    )
}

export default Routerkasa;