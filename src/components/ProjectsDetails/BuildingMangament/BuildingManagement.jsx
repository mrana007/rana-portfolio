import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const BuildingManagement = () => {
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
          Quantum Tower
        </p>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent pb-2">
          Features:
        </h2>
        <ul className="list-disc pl-6 text-white">
          <li>This is a building management projects</li>
          <li>Every user can visit home page</li>
          <li>To agreements with the apartments user need to sent a request</li>
          <li>There are three different dashboard for User, Member and Admin</li>
          <li>User agreement request will shown to Admin dashboard</li>
          <li>if Admin accept the agreement user role become a Member</li>
          <li>If Admin reject the agreement request user will remain same</li>
          <li>An Admin can add discount coupon and also update announcement</li>
          <li>After successfully become a Member he can paid the apartment rent</li>
          <li>Member can used the visa card to payment the apartment rent</li>
          <li>If member used coupon he/she wil get discount</li>
          <li>Only admin can access the Admin dashboard</li>
          <li>As like only member can access the member dashboard where he see his every status</li>
          <li>Every register user can access the user dashboard</li>
        </ul>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent pb-2">
        Technology used:
        </h2>
        <div className="pb-2">
            <p className="flex items-center gap-3 text-white"><FaRegArrowAltCircleRight  /> Front-End: JavaScript, React JS, Tailwind CSS</p>
            <p className="flex items-center gap-3 text-white"><FaRegArrowAltCircleRight  /> Back-End: Express, NodeJs</p>
            <p className="flex items-center gap-3 text-white"><FaRegArrowAltCircleRight  /> Database: MongoDB</p>
            <p className="flex items-center gap-3 text-white"><FaRegArrowAltCircleRight  /> Authentication: FireBase, JWT</p>
            <p className="flex items-center gap-3 text-white"><FaRegArrowAltCircleRight  /> Payment Method:  Stripe</p>
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent pb-2">
        <Link to="https://a12-final-effort.web.app">Project Live Link</Link>
        </h2>
      </div>
    </div>
  );
};

export default BuildingManagement;
