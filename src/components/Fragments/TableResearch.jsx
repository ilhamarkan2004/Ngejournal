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
    code: "",
    name: "",
    start_date: "",
    due_date: "",
    status: "",
    description: "",
    category: "",
    doc: null,
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

  const handleDelete = (researchId) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const config = {
        headers: {
          "Content-Type": "Application/json",
          "Authorization": "Bearer " + localStorage.getItem("token"),
        },
      };
      axios
        .delete(`http://127.0.0.1:8000/api/research/${researchId}`, config)
        .then((res) => {
          console.log(res);

          setResearch((prevResearch) =>
            prevResearch.filter((item) => item.id !== researchId)
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
                {research.length > 0 &&
                  research.map((research, index) => (
                    <tr key={index}>
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
                          <button onClick={() => handleDelete(research.id)}>
                            <FaTrashAlt size={18} />
                          </button>
                        </div>
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
export default TableResearch;
