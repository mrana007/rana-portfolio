import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const GroupStudy = () => {
  return (
    <div className="p-10 md:p-28 pt-28 flex flex-col md:flex-row gap-16 bg-black">
      <div className="flex-1">
        <div className="flex justify-center items-center">
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={2000} >
            <div data-src="https://i.ibb.co/Mg9NYyL/img1.jpg" />
            <div data-src="https://i.ibb.co/YhVh4SX/img2.jpg" />
            <div data-src="https://i.ibb.co/BfvXjWj/img3.jpg" />
            <div data-src="https://i.ibb.co/41MJKyp/img4.jpg" />
            <div data-src="https://i.ibb.co/zNSvWKs/img5.jpg" />
            <div data-src="https://i.ibb.co/g6vTmL3/img6.jpg" />
          </AutoplaySlider>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent uppercase pb-3">
          Project Info
        </h2>
        <p className="text-white text-2xl pb-2">
          <span className="font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent">
            Project Name:
          </span>{" "}
          StudyHive
        </p>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent pb-2">
          Features:
        </h2>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent pb-2">
        Technology used:
        </h2>
        <div className="pb-2">
            <p className="flex items-center gap-3 text-white"><FaRegArrowAltCircleRight  /> Front-End: JavaScript, React JS, Tailwind CSS</p>
            <p className="flex items-center gap-3 text-white"><FaRegArrowAltCircleRight  /> Back-End: Express, NodeJs</p>
            <p className="flex items-center gap-3 text-white"><FaRegArrowAltCircleRight  /> Database: MongoDB</p>
            <p className="flex items-center gap-3 text-white"><FaRegArrowAltCircleRight  /> Authentication: FireBase, JWT</p>
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent pb-2">
        <Link to="https://a11-group-study.web.app/">Project Live Link</Link>
        </h2>
      </div>
    </div>
  );
};

export default GroupStudy;
