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
            <div data-src="https://i.ibb.co/MMhwf6X/Screenshot-2023-12-12-at-19-08-39.png" />
            <div data-src="https://i.ibb.co/qMx2nXT/Screenshot-2023-12-12-at-19-09-24.png" />
            <div data-src="https://i.ibb.co/H7jvQS7/Screenshot-2023-12-12-at-19-11-23.png" />
            <div data-src="https://i.ibb.co/jrz3RrY/Screenshot-2023-12-12-at-19-09-37.png" />
            <div data-src="https://i.ibb.co/M7cp2NF/Screenshot-2023-12-12-at-19-12-56.png" />
            <div data-src="https://i.ibb.co/jL6hzHT/Screenshot-2023-12-12-at-19-13-03.png" />
            <div data-src="https://i.ibb.co/7YzQ37x/Screenshot-2023-12-12-at-19-13-25.png" />
            <div data-src="https://i.ibb.co/YR7tLrH/Screenshot-2023-12-12-at-19-13-40.png" />
            <div data-src="https://i.ibb.co/YtGNhdQ/Screenshot-2023-12-12-at-19-14-12.png" />
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
        <ul className="list-disc pl-6 text-white">
        <li>This is Group Study Project</li>
        <li>In this projects any users an create an assignments</li>
        <li>After creating assignment by any user it will store at All Assignments routes</li>
        <li>In all assignments routes every assignments contain a assignments details and update button -by clicking details button it need to sign in and after successfully login it will show assignments details page where have a take assignments button</li>
        <li>By clicking take button it will open modal where having a submission form form with required value needed</li>
        <li>after submit the form it will store into submitted assignments route by default in pending status and contain a give marks button</li>
        <li>By clicking give marks button it will open a modal where examinee can give feedback and marks -After marking the status will changed confirmed from pending</li>
        <li>In my assignments routes will show the the assignment which is created by login user</li>
        </ul>
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
