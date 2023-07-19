
import './App.css';
import SwiperCoverflow from './components/caraousel';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import SponsersGrid from './components/Sponsers';
import Section from './components/section';
import Faq from "./components/Faq"
function App() {
  return (
    <>
    <Navbar/>
   <SwiperCoverflow/>
   <Section/>
   <Faq/>
   <SponsersGrid/>
   <Footer/>
   
   </>
  )
}

export default App;
