import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import project1 from "../../../assets/projects1.jpg"
import project2 from "../../../assets/projects2.jpg"
import project3 from "../../../assets/projects3.jpg"

const Projects = () => {
  return (
    <div className="bg-black">
      <h2 className="text-center text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent uppercase p-20">
        Some of my works
      </h2>
      <div className="bg-slate-900 p-10">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* first card */}
          <div className="card glass rounded-xl">
            <div className="p-2 relative items-center text-center">
                <img className="rounded-lg" src={project1} />
                <h2 className="text-white p-4">Building Management</h2>
            </div>
            <div className="absolute text-3xl text-white right-4 top-3">
                <Link to="/building"><FaLink /></Link> 
            </div>
          </div>
            {/* second card */}
          <div className="card glass rounded-xl">
            <div className="p-2 relative items-center text-center">
                <img className="rounded-lg" src={project2} />
                <h2 className="text-white p-4">Group Study</h2>
            </div>
            <div className="absolute text-3xl right-4 top-3">
                <Link to="/study"><FaLink /></Link> 
            </div>
          </div>
            {/* third card */}
          <div className="card glass rounded-xl">
            <div className="p-2 relative items-center text-center">
                <img className="rounded-lg" src={project3} />
                <h2 className="text-white p-4">Brand Shop</h2>
            </div>
            <div className="absolute text-3xl text-white right-4 top-3">
                <Link to="/shop"><FaLink /></Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
