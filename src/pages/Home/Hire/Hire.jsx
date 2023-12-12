import { Link } from "react-router-dom";

const Hire = () => {
  return (
    <div className="bg-[#02cfb4] py-10">
      <div className="max-w-screen-lg mx-auto p-3">
        <div className="flex gap-4">
          <div className="">
            <h2 className="flex text-4xl font-semibold uppercase text-center">
             Hire me for your awesome project
            </h2>
            <p className="text-center text-lg">
              I am a dedicated junior web developer ready to turn your ideas
              into a stunning <br /> reality. Lets collaborate to make your
              project shine!
            </p>
          </div>
          <div className="col-span-1">
            <Link to="/contact">
              <button className="btn btn-accent bg-[#22252c] text-[#02cfb4] border-none w-36 text-xl">
                Hire me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
