import About from "../About/About";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUS/ContactUs";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;