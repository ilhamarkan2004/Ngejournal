import { useEffect } from "react";
import Main from "../../components/Fragments/Main";
import Sidebar from "../../components/Fragments/Sidebar";
import TableResearch from "../../components/Fragments/TableResearch";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    const currentTime = new Date().getTime();
    if (!token || !tokenExpiration || currentTime > tokenExpiration) {
      navigate("/login");
    }
  }, []);

    useEffect(() => {
      const tokenExpiration = localStorage.getItem("tokenExpiration");
      const currentTime = new Date().getTime();
      if (tokenExpiration && currentTime > tokenExpiration) {
        localStorage.removeItem("token"); // Hapus token jika sudah kedaluwarsa
        localStorage.removeItem("tokenExpiration"); // Hapus waktu kedaluwarsa juga
      }
    }, []);
  return (
    <>
      <Sidebar /> {/* Menampilkan sidebar */}
      <Main />
      <TableResearch />
    </>
  );
};

export default Dashboard;
