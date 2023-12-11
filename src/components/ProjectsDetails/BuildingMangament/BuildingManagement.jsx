import img from "../../../assets/ranaImg.jpg"

const BuildingManagement = () => {
    return (
        <div className="p-10 md:p-28 flex flex-col md:flex-row gap-6 bg-black">
      <div className="flex-1 ">
        <div className="flex justify-center items-center">
          <img className="w-[390px] rounded-lg" src={img} />
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
      </div>
    </div>
    );
};

export default BuildingManagement;