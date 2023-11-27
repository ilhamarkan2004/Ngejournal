import { useEffect } from "react";
import Main from "../../components/Fragments/Main";
import Sidebar from "../../components/Fragments/Sidebar";
import TableCategory from "../../components/Fragments/TableCategory";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("login"); // Redirect ke halaman login jika tidak ada token
    }
  }, []);
  return (
    <>
      <Sidebar /> {/* Menampilkan sidebar */}
      <Main />
      <TableCategory />
    </>
  );
};

export default Category;
