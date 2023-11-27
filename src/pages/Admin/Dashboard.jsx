import { useEffect } from "react";
import Main from "../../components/Fragments/Main";
import Sidebar from "../../components/Fragments/Sidebar";
import TableResearch from "../../components/Fragments/TableResearch";

const Dashboard = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    const currentTime = new Date().getTime();
    if (!token || !tokenExpiration || currentTime > tokenExpiration) {
      window.location.href = "/login";
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
