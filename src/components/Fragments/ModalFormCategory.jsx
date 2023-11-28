import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { addCategory } from "../../services/category.services";

const ModalFormCategory = ({ isOpen, toggleModal, text }) => {
  const [formData, setFormData] = useState({
    name: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
    };
    addCategory(data, (status, res) => {
      if (status) {
        console.log("success", res);
        setFormData({
          name: "",
        });
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

export default ModalFormCategory;
