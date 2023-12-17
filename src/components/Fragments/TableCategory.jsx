import { useEffect, useState } from "react";
import { getCategory } from "../../services/category.services";
import { FaPencil } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import ModalFormCategory from "./ModalFormCategory";

const TableCategory = () => {
  const [category, setCategory] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
  });

  useEffect(() => {
    getCategory((data) => {
      setCategory(data);
    });
  }, []);

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };
  const toggleEditModal = (id, name) => {
    setIsEditModalOpen(!isEditModalOpen);
    setFormData({
      id: id,
      name: name,
    });
  };

  //  const handleEditSubmit = () => {
  //    const config = {
  //      headers: {
  //        "Content-Type": "Application/json",
  //        Authorization: "Bearer " + localStorage.getItem("token"),
  //      },
  //    };

  //    const updatedCategory = {
  //      name: formData.name,
  //    };

  //    axios
  //      .put(
  //        `http://127.0.0.1:8000/api/research/category/${formData.id}`,
  //        updatedCategory,
  //        config
  //      )
  //      .then((res) => {
  //        console.log(res);
  //        getCategory((data) => {
  //          setCategory(data);
  //        });
  //        setIsEditModalOpen(false);
  //        setFormData({
  //          id: null,
  //          name: "",
  //        });
  //      })
  //      .catch((error) => {
  //        console.log(error);
  //      });
  //  };

  const handleDelete = (categoryId) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const config = {
        headers: {
          "Content-Type": "Application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      axios
        .delete(
          `http://127.0.0.1:8000/api/research/category/${categoryId}`,
          config
        )
        .then((res) => {
          console.log(res);

          setCategory((prevCategory) =>
            prevCategory.filter((item) => item.id !== categoryId)
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold font-serif leading-tight">
            Category
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
                  category.map((category,index) => (
                    <tr key={index}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          {category.name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex justify-center items-center gap-x-3">
                          <button
                            id="modal-button"
                            onClick={() =>
                              toggleEditModal(category.id, category.name)
                            }
                          >
                            <FaPencil size={18} />
                          </button>
                          <button onClick={() => handleDelete(category.id)}>
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
        {isAddModalOpen && (
          <ModalFormCategory
            isOpen={isAddModalOpen}
            toggleModal={toggleAddModal}
            text="Add Category"
            formData={formData}
          />
        )}
        {isEditModalOpen && (
          <ModalFormCategory
            isOpen={isEditModalOpen}
            toggleModal={toggleEditModal}
            text="Edit Category"
            form={formData}
          />
        )}
      </div>
    </div>
  );
};
export default TableCategory;
