import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { addResearch } from "../../services/research.service";
import { getCategory } from "../../services/category.services";

const ModalForm = ({ isOpen, toggleModal, text }) => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    description: "",
    category: "",
    start_date: "",
    due_date: "",
    research_category_id: "",
    status: "",
    doc: null,
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    getCategory((data) => {
      setCategories(data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    function generateRandomNumber() {
      var minm = 100000;
      var maxm = 999999;
      return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    }
    const data = {
      code: generateRandomNumber(),
      name: event.target.name.value,
      description: event.target.description.value,
      start_date: event.target.start_date.value,
      due_date: event.target.due_date.value,
      research_category_id: event.target.category.value,
      status: event.target.status.value,
      doc: event.target.doc.files[0],
    };
    addResearch(data, (status, res) => {
      if (status) {
        console.log("success", res);
        setFormData({
          code: "",
          name: "",
          description: "",
          category: "",
          start_date: "",
          due_date: "",
          research_category_id: "",
          status: "",
          doc: null,
        });

        const newFileInput = document.createElement("input");
        newFileInput.type = "file";
        newFileInput.name = "doc";

        const oldFileInput = document.getElementsByName("doc")[0];
        oldFileInput.parentNode.replaceChild(newFileInput, oldFileInput);
      } else {
        console.log("error", res);
      }
    });
    console.log(data);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white max-w-xl w-full rounded-md">
            <form onSubmit={handleSubmit}>
              <div className="p-7 flex items-center justify-between border-b border-b-gray-300">
                <h3 className="font-semibold text-xl">{text}</h3>
                <IoCloseOutline
                  size={20}
                  onClick={toggleModal}
                  className="modal-close rounded-full cursor-pointer hover:bg-gray-200"
                />
              </div>
              <div className="p-7 border-b border-b-gray-300">
                <div className="mb-7">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={formData.name}
                    type="text"
                    name="name"
                    autocomplete="off"
                    className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 hover:border-blue-500"
                  />
                </div>
                <div className="mb-7">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    onChange={handleInputChange}
                    value={formData.description}
                    name="description"
                    className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 hover:border-blue-500"
                  ></textarea>
                </div>
                <div className="flex mb-7">
                  <div className="w-1/2 mr-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="start_date"
                    >
                      Start Date
                    </label>
                    <input
                      value={formData.start_date}
                      onChange={handleInputChange}
                      type="date"
                      name="start_date"
                      className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 hover:border-blue-500"
                    />
                  </div>
                  <div className="w-1/2 ml-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="due_date"
                    >
                      Due Date
                    </label>
                    <input
                      onChange={handleInputChange}
                      value={formData.due_date}
                      type="date"
                      name="due_date"
                      className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 hover:border-blue-500"
                    />
                  </div>
                </div>
                <div className="mb-7 flex">
                  <div className="w-1/2 mr-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="category"
                    >
                      Category
                    </label>
                    <select
                      onChange={handleInputChange}
                      value={formData.category}
                      name="category"
                      className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 hover:border-blue-500"
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-1/2 ml-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="status"
                    >
                      Status
                    </label>
                    <select
                      onChange={handleInputChange}
                      value={formData.status}
                      name="status"
                      className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 hover:border-blue-500"
                    >
                      <option value="">Select Status</option>
                      <option value="ongoing">On Going</option>
                      <option value="completed">Completed</option>
                      <option value="Overdue">Overdue</option>
                    </select>
                  </div>
                </div>
                <div className="mb-7">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="doc"
                  >
                    Upload Document
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={formData.doc}
                    type="file"
                    name="doc"
                    className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 hover:border-blue-500"
                  />
                </div>
              </div>
              <div className="p-7 flex items-center justify-start">
                <div>
                  <button
                    type="submit"
                    className="text-sm text-white bg-blue-500 rounded-md px-4 py-2 mr-1 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  >
                    Submit
                  </button>
                  <button
                    onClick={toggleModal}
                    className="modal-close text-sm text-gray-400 border rounded-md ml-1 px-4 py-2 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalForm;
