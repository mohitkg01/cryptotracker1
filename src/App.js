
import {BrowserRouter as Router,Routes,Route} from"react-router-dom";
import About from './Components/About';
import Home from './Components/Home';
import Market from './Components/Market';
import News from './Components/News';
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import './App.css';
import './Styles/header.css';
import './Styles/Home.css'

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/#aboutus" element={<About/>}/>
      <Route path="/#market" element={<Market/>}/>
      <Route path="/#news" element={<News/>}/>
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
