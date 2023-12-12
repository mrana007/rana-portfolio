import { FaRegDotCircle } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";

const Education = () => {
  return (
    <div className="bg-slate-900">
      <h2 className="text-center text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent uppercase p-20">
        Education
      </h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
    <div className="timeline-middle">
    <IoSchool className="text-[#07f7f7] text-5xl"/>
    </div>
    <hr />
  </li>
  <li>
    <div className="timeline-middle">
    <FaRegDotCircle className="text-[#07f7f7] text-3xl" />
    </div>
    <div className="timeline-start md:text-end mb-10">
      <time className="font-medium text-xl text-white italic">2015</time>
      <div className="text-2xl font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent uppercase pb-2">Bachelor in Science (BSc)</div>
      <p className="pb-1 text-white">IUBAT- International University of Business Agriculture and Technology</p>
      <p className="text-white">Bsc in Electrical and Electronics Engineering</p>    
    </div>
    <hr/>
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <FaRegDotCircle className="text-[#07f7f7] text-3xl" />
    </div>
    <div className="timeline-end mb-10">
      <time className="font-medium text-xl text-white italic">2009</time>
      <div className="text-2xl font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent uppercase pb-2">Higher Secondary Certificate (HSC)</div>
      <p className="pb-1 text-white">Pirganj Govt College, Pirganj, Thakurgaon</p>
      <p className="text-white">Group: Science</p> 
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
    <FaRegDotCircle className="text-[#07f7f7] text-3xl" />
    </div>
    <div className="timeline-start md:text-end mb-10">
      <time className="font-medium text-xl text-white italic">2007</time>
      <div className="text-2xl font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent uppercase pb-2">School Secondary Certificate (SSC)</div>
      <p className="pb-1 text-white">Bhadua High Scool, Pirganj, Thakurgaon</p>
      <p className="text-white">Group: Science</p>
      
    </div>
    <hr />
  </li>
  <li>
  <hr />
    <div className="timeline-middle">
    <FaRegDotCircle className="text-[#07f7f7] text-3xl" />
    </div>
  </li>
</ul>
    </div>
  );
};

export default Education;
