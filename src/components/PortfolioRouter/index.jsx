import ProjectPage from '../../pages/ProjectPage';
import Error from '../../pages/Error';
import Home from '../../pages/Home'
import PortfolioPage from '../../pages/Portfoliopage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function PortfolioRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Portfolio" element={<PortfolioPage />} />
                <Route path="/Portfolio/:id" element={<ProjectPage />}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
  
        </Router>
    )
}

export default PortfolioRouter;