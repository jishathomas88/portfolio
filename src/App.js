import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from '../src/Pages/Home'
import Projects from '../src/Pages/Projects'
import Experiences from '../src/Pages/Experiences'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProjectDisplay from './Pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/projects/:id' element={<ProjectDisplay />}></Route>
          <Route path='/experiences' element={<Experiences />}></Route>
        </Routes>
      <Footer />
      </Router>
      
    </div>
  );
}

export default App;

