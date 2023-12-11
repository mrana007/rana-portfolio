import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
  return (
    <div className="bg-black">
      <h2 className="text-center text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent uppercase pb-8">
        Professional Skills
      </h2>
      <div className="bg-slate-900 p-10 md:px-28">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h1 className="text-white pb-2">HTML 5</h1>
            <ProgressBar completed={95} />;
            <h1 className="text-white pb-2">CSS</h1>
            <ProgressBar completed={80} />;
            <h1 className="text-white pb-2">Javascript</h1>
            <ProgressBar completed={75} />;
          </div>
          <div className="flex-1">
            <h1 className="text-white pb-2">React</h1>
            <ProgressBar completed={70} />;
            <h1 className="text-white pb-2">Node</h1>
            <ProgressBar completed={60} />;
            <h1 className="text-white pb-2">MongoDB</h1>
            <ProgressBar completed={90} />;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
