import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const ModalForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    dueDate: "",
    status: "",
    file: null,
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
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
    toggleModal();
  };

  return (
    <>
      <button
        onClick={toggleModal}
        id="modal-button"
        className="float-right mb-5  text-sm text-white bg-green-600 rounded-md px-4 py-2  hover:bg-green-700 focus:outline-none focus:bg-green-700"
      >
        Tambah
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white max-w-xl w-full rounded-md">
            <form onSubmit={handleSubmit}>
              <div className="p-7 flex items-center justify-between border-b border-b-gray-300">
                <h3 className="font-semibold text-xl">Add Research</h3>
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
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 hover:border-blue-500"
                  />
                </div>
                <div className="flex mb-7">
                  <div className="w-1/2 mr-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="startDate"
                    >
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 hover:border-blue-500"
                    />
                  </div>
                  <div className="w-1/2 ml-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="dueDate"
                    >
                      Due Date
                    </label>
                    <input
                      type="date"
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 hover:border-blue-500"
                    />
                  </div>
                </div>
                <div className="mb-7 flex">
                  <div className="w-1/2 mr-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="status"
                    >
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 hover:border-blue-500"
                    >
                      <option value="">Select Category</option>
                      <option value="Golongan A">Golongan A</option>
                      <option value="Golongan B">Golongan B</option>
                      <option value="Golongan C">Golongan C</option>
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
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 hover:border-blue-500"
                    >
                      <option value="">Select Status</option>
                      <option value="On Going">On Going</option>
                      <option value="Completed">Completed</option>
                      <option value="Overdue">Overdue</option>
                    </select>
                  </div>
                </div>
                <div className="mb-7">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="file"
                  >
                    Upload Document
                  </label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
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
    </>
  );
};

export default ModalForm;
