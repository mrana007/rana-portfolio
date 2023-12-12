import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const BrandShop = () => {
  return (
    <div className="p-10 md:p-28 pt-28 flex flex-col md:flex-row gap-16 bg-black">
      <div className="flex-1">
        <div className="flex justify-center items-center">
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={2000} >
            <div data-src="https://i.ibb.co/Jyhqgpc/Screenshot-2023-12-12-at-19-38-12.png" />
            <div data-src="https://i.ibb.co/nzcyyS5/Screenshot-2023-12-12-at-19-40-00.png" />
            <div data-src="https://i.ibb.co/G3JSpS6/Screenshot-2023-12-12-at-19-40-17.png" />
            <div data-src="https://i.ibb.co/XtZTjRs/Screenshot-2023-12-12-at-19-40-23.png" />
            <div data-src="https://i.ibb.co/BTp7JmD/Screenshot-2023-12-12-at-19-40-40.png" />
            <div data-src="https://i.ibb.co/cc1h3JN/Screenshot-2023-12-12-at-19-40-56.png" />
            <div data-src="https://i.ibb.co/H2412Sm/Screenshot-2023-12-12-at-19-41-05.png" />
            <div data-src="https://i.ibb.co/PjhMHnR/Screenshot-2023-12-12-at-19-41-16.png" />
            <div data-src="https://i.ibb.co/6XWcWVX/Screenshot-2023-12-12-at-19-41-40.png" />
            <div data-src="https://i.ibb.co/FKHpn69/Screenshot-2023-12-12-at-19-41-57.png" />
            <div data-src="https://i.ibb.co/yFCF5fL/Screenshot-2023-12-12-at-19-42-15.png" />
            <div data-src="https://i.ibb.co/C2wms69/Screenshot-2023-12-12-at-19-42-48.png" />
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
          Gadget<span className="text-blue-600 font-bold">Grove</span>
        </p>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent pb-2">
          Features:
        </h2>
        <ul className="list-disc pl-6 text-white">
          <li>There are six authorized brand of GadgetGrove</li>
          <li>Each brand having min 4 products, user also can add product by used Add Product Routes, which is private routes</li>
          <li>After clicked brand its redirect to its product</li>
          <li>Each products includes name, brand, price, type, rating image also having two button update and details.</li>
          <li>by clicked update button user can update each products. It is a private routes</li>
          <li>and by clicked details it redirect to product details page</li>
          <li>after seeing product details there having a Add to cart button</li>
          <li>by clicked add to cart it will stored add my cart routes</li>
          <li>user also can delete product from My Cart routes</li>
          <li>to enter private routes user need to register first and then login with validate password</li>
          <li>user also can visit private routes by Google login</li>
        </ul>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent pb-2">
        Technology used:
        </h2>
        <div className="pb-2">
            <p className="flex items-center gap-3 text-white"><FaRegArrowAltCircleRight  /> Front-End: JavaScript, React JS, Tailwind CSS</p>
            <p className="flex items-center gap-3 text-white"><FaRegArrowAltCircleRight  /> Back-End: Express, NodeJs</p>
            <p className="flex items-center gap-3 text-white"><FaRegArrowAltCircleRight  /> Database: MongoDB</p>
            <p className="flex items-center gap-3 text-white"><FaRegArrowAltCircleRight  /> Authentication: FireBase</p>
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent pb-2">
        <Link to="https://a10-brand-shop-client.web.app">Project Live Link</Link>
        </h2>
      </div>
    </div>
  );
};

export default BrandShop;
