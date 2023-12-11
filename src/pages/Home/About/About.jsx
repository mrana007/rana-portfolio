import img from "../../../assets/ranaImg.jpg";
import resume from "../../../assets/resume.pdf"
import { FaCloudDownloadAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="p-10 md:p-28 flex flex-col md:flex-row gap-6 bg-black">
      <div className="flex-1 ">
        <div className="flex justify-center items-center">
          <img className="w-[390px] rounded-lg" src={img} />
          </div>
          <div className="flex justify-center pt-6">
          <a href={resume} download="Rana.pdf"  className="btn bg-[#17d396] text-white border-none"><FaCloudDownloadAlt className="text-2xl" /> Download CV</a>
          </div>
      </div>
      <div className="flex-1">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent uppercase">
          About Me
        </h2>
        <p className="text-white my-4">
          Hello! I`m Masud Rana, a Junior Web Developer with a strong foundation
          in HTML, CSS, JavaScript, and proficiency in React. With a passion for
          creating interactive and user-friendly interfaces, I leverage my React
          skills to contribute to modern and responsive web applications.
          Committed to continuous learning and staying abreast of industry
          trends, I am excited to bring my React expertise to collaborative
          projects and further enhance my capabilities as a junior developer.
        </p>
        <p className="text-white text-2xl">
          <span className="font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent">
            Name:
          </span>{" "}
          Md. Masud Rana
        </p>
        <p className="text-white text-2xl py-1">
          <span className="font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent">
            Date of Birth:
          </span>{" "}
          12 December 1992
        </p>
        <p className="text-white text-2xl pb-1">
          <span className="font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent">
            Address:
          </span>{" "}
          Dhaka, Bangladesh
        </p>
        <p className="text-white text-2xl pb-1">
          <span className="font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent">
            Phone:
          </span>{" "}
          +8801717716443
        </p>
        <p className="text-white text-2xl pb-1">
          <span className="font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent">
            Email:
          </span>{" "}
          rana.es.bc@gmail.com
        </p>
      </div>
    </div>
  );
};

export default About;
