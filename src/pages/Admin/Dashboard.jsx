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
  return (
    <>
      <Sidebar /> {/* Menampilkan sidebar */}
      <Main />
      <TableResearch />
    </>
  );
};

export default Dashboard;
