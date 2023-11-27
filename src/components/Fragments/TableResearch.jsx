import { FaPencil } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import ModalForm from "./ModalForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { getResearchs } from "../../services/research.service";

const TableResearch = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [research, setResearch] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    dueDate: "",
    status: "",
    file: null,
  });

  useEffect(() => {
    getResearchs((data) => {
      setResearch(data);
    });
  }, []);

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };
  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      file: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      title: "",
      startDate: "",
      dueDate: "",
      status: "",
      file: null,
    });
    toggleAddModal();
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };
  const calculateDaysFromNow = (dateString) => {
    const startDate = new Date(dateString);
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - startDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold font-serif leading-tight">
            Research
          </h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <button
            onClick={toggleAddModal}
            id="modal-button"
            className="float-right mb-5  text-sm text-white bg-green-600 rounded-md px-4 py-2  hover:bg-green-700 focus:outline-none focus:bg-green-700"
          >
            Tambah
          </button>
          {isAddModalOpen && (
            <ModalForm
              isOpen={isAddModalOpen}
              toggleModal={toggleAddModal}
              text="Add Research"
              formData={formData}
              handleInputChange={handleInputChange}
              handleFileChange={handleFileChange}
              handleSubmit={handleSubmit}
            />
          )}
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Kode Research
                  </th>
                  <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Kategori
                  </th>
                  <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Start Date
                  </th>
                  <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Document
                  </th>
                  <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>{" "}
                </tr>
              </thead>
              <tbody className="text-center">
                {/* {research.map((item, index) => ( */}

                {research.length > 0 &&
                  research.map((research) => (
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                        <p className="text-gray-600 whitespace-no-wrap">
                          {research.code}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {research.category.name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {research.name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {formatDate(research.start_date)}
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">
                          {calculateDaysFromNow(research.start_date) > 0
                            ? `Started ${calculateDaysFromNow(
                                research.start_date
                              )} days ago`
                            : "Starts today"}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {formatDate(research.due_date)}
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">
                          {calculateDaysFromNow(research.end_date) > 0
                            ? `Ended ${calculateDaysFromNow(
                                research.end_date
                              )} days ago`
                            : "End Tomorrow"}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {research.status === "completed" ? (
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Completed</span>
                          </span>
                        ) : (
                          <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">On Going</span>
                          </span>
                        )}
                      </td>
                      <td className="border-b border-gray-200 bg-white text-sm text-center">
                        <div className="flex justify-center items-center gap-x-3">
                          <button onClick={toggleEditModal} id="modal-button">
                            <FaPencil size={18} />
                          </button>
                          <a href="" onClick={() => confirm("Are you sure?")}>
                            <FaTrashAlt size={18} />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                {/* <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="text-gray-600 whitespace-no-wrap">
                          000004
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Golongan A
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Dampak Pengembangan Teknologi Gasifikasi pada Industri
                      Batu Bara
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Sept 28, 2019
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">
                      Start in 3 days
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Okt 19, 2020
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">
                      End in 3 days
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">On Going</span>
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-sm text-center">
                    <div className="mx-auto">
                      <button>
                        <FaPencil size={18} />
                      </button>
                      {isEditModalOpen && (
                        <ModalForm
                          isOpen={isEditModalOpen}
                          toggleModal={toggleEditModal}
                          text="Edit Research"
                          formData={formData}
                          handleInputChange={handleInputChange}
                          handleFileChange={handleFileChange}
                          handleSubmit={handleSubmit}
                        />
                      )}
                      <a href="">
                        <FaTrashAlt size={18} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="text-gray-600 whitespace-no-wrap">
                          000004
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Golongan A
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Dampak Pengembangan Teknologi Gasifikasi pada Industri
                      Batu Bara
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Sept 28, 2019
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">
                      Start in 3 days
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Okt 19, 2020
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">
                      End in 3 days
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Completed</span>
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-sm text-center">
                    <div className="flex justify-center items-center gap-x-3">
                      <a href="">
                        <FaPencil size={18} />
                      </a>
                      <a href="">
                        <FaTrashAlt size={18} />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="text-gray-600 whitespace-no-wrap">
                          000004
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Golongan A
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Dampak Pengembangan Teknologi Gasifikasi pada Industri
                      Batu Bara
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Sept 28, 2019
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">
                      Start in 3 days
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Okt 19, 2020
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">
                      End in 3 days
                    </p>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Overdue</span>
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-sm text-center">
                    <div className="flex justify-center items-center gap-x-3">
                      <a href="">
                        <FaPencil size={18} />
                      </a>
                      <a href="">
                        <FaTrashAlt size={18} />
                      </a>
                    </div>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableResearch;
