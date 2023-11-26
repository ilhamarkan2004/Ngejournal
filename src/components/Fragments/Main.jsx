import { FaToolbox } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
const Main = () => {
  return (
    <div className="flex-1 mt-20 py-5  px-8 lg:px-20">
      {" "}
      {/* Bagian konten */}
      <h1 className="text-2xl lg:text-4xl font-serif font-bold mb-4 lg:mb-8">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
        {/* Kotak pertama */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="bg-[#E89271] rounded-full p-3 text-white">
            <FaToolbox className="w-6 h-6" /> {/* Ikon */}
          </div>
          <h2 className="text-lg  text-gray-600 font-serif my-3">Research</h2>
          <p className="text-lg lg:text-2xl font-serif text-black font-semibold">
            <span className="text-xl lg:text-4xl">5 </span>research
          </p>
        </div>
        {/* Kotak kedua */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="bg-[#70A1E5] rounded-full p-3 text-white">
            <IoMdTime className="w-6 h-6" /> {/* Ikon */}
          </div>
          <h2 className="text-lg  text-gray-600 font-serif my-3">Progres</h2>
          <p className="text-lg lg:text-2xl font-serif text-black font-semibold">
            <span className="text-xl lg:text-4xl">3</span>/5 Project
          </p>
        </div>
        {/* Kotak ketiga */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="bg-[#F0C274] rounded-full p-3 text-white">
            <FaRegUser className="w-6 h-6" /> {/* Ikon */}
          </div>
          <h2 className="text-lg  text-gray-600 font-serif my-3">Users</h2>
          <p className="text-lg lg:text-2xl font-serif text-black font-semibold">
            <span className="text-xl lg:text-4xl">10</span> Users
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
