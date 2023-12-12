import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Hire from "../Hire/Hire";
import Education from "../Education/Education";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Portfolio | Home</title>
            </Helmet>
            <Banner />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Hire />
        </div>
    );
};

export default Home;