import '../App.css'
import Cards from '../components/cards/Cards';
import Footer from '../components/footer/Footer';
import HeroSection from '../components/heroSection/HeroSection'

function Home () {
    return (
        <>
       <HeroSection />
       <Cards />
       <Footer />
        </>
    )
}

export default Home;