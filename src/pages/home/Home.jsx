import About from "../../components/About";
import Hero from "../../components/Hero";
import Review from "../../components/Review";
import Service from "../../components/Service";
import Vennus from "../../components/Venue";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Home = () => {
    return (
        <div>
            <div data-aos="zoom-in">
                <Hero></Hero>
            </div>
            <About></About>
            <Service></Service>
          
            <Vennus></Vennus>
           
            <Review></Review>
          
            
          
            
        </div>
    );
};

export default Home;