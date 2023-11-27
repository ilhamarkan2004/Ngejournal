import { useEffect, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { getCategory } from "../../services/category.services";
const TableCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory((data) => {
      setCategory(data);
    });
  }, []);
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold font-serif leading-tight">
            Category
          </h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="text-center">
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                {category.length > 0 &&
                  category.map((category) => (
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          {category.name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <IoEyeSharp className="cursor-pointer" size={25} />
                      </td>
                    </tr>
                  ))}
        
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableCategory;
