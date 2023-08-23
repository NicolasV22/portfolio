import LogementPage from '../../pages/LogementPage'
import Error from '../../pages/Error';
import Home from '../../pages/Home'
import About from '../../pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Routerkasa(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:id" element={<LogementPage />}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
  
        </Router>
    )
}

export default Routerkasa;