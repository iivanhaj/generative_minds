import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Footer from './pages/Footer';

function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Features/>
        <About/>
        <Footer/>
    </div>
  );
}

export default App;
