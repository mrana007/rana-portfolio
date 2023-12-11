import bannerImg from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover"
          }} >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-start text-white">
          <div className="">
            <h1 className="mb-5 text-8xl">
              Hello! <br /> I`m Masud Rana
            </h1>
            <p className="mb-5 text-4xl">Front-End Web Developer </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;