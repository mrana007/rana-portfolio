import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Hire from "../Hire/Hire";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Portfolio | Home</title>
            </Helmet>
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Hire />
        </div>
    );
};

export default Home;