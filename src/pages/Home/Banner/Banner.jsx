import { useTypewriter } from "react-simple-typewriter";
import bannerImg from "../../../assets/banner.png";

const Banner = () => {
  const [text] = useTypewriter({
    words: ['Masud Rana'],
    loop: 0,
    typeSpeed: 300
  });

  return (
    <div className="relative min-h-screen w-full" style={{
      backgroundImage: `url(${bannerImg})`,
      backgroundSize: "cover",
      position: "relative",
    }}>
      <div className="absolute inset-0 bg-[#131313] bg-opacity-60"></div>
      <div className="text-white min-h-screen pt-4 pl-8 md:pl-52 flex items-center relative">
        <div className="w-full">
          <h1 className="text-left pb:3 md:pb-5 text-4xl md:text-8xl">
            Hello! <br /> I`m <span className="text-green-600">{text}</span>
          </h1>
          <p className="text-lg md:text-4xl">Front-End Web Developer </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
