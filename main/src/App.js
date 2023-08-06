
import './App.css';
import SwiperCoverflow from './components/caraousel';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import SponsersGrid from './components/Sponsers';
import Section from './components/section';
import Faq from "./components/Faq"
import 'typeface-raleway';
import  HorizontalsScroll from "./components/parallex_1"
function App() {
  return (
    <>
    {/* <Navbar/>  */}
   <SwiperCoverflow/>
   {/* <Section/>
   <Faq/>
   <SponsersGrid/>
  */}
    <HorizontalsScroll/>
    {/* <Footer/>  */}
   </>
  )
}

export default App;
