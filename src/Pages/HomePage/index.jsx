import AboutUs from '../../components/AboutUs'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import Header from "../../components/Header/index"
import Services from "../../components/Services"


const Home = () => {
  return (
    <>  
      <Header title="PSY" />
      <Carousel />
      <Services />
      <AboutUs />
      <Footer />
    </>
  )
}

export default Home