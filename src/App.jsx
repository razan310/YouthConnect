import NavBar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import img1 from "./assets/images/Picture5.png"
import OurProjects from "./components/Ourproject/OurProjects"
import Values from "./components/values/Values"
import Footer from './components/footer/Footer'
import Contactus2 from "./components/contactus2/Contactus2"

function App() {

  return (
    <>
    <NavBar/>
    <Hero img={img1} desc="Young people have a clear understanding of their identity and affiliations." title="Healthy community"/>
    <OurProjects/>
    <Values/>
    <Contactus2/>
    <Footer/>
    </>
  )
}

export default App
