import Main from "../../components/Fragments/Main";
import Sidebar from "../../components/Fragments/Sidebar";
import TableResearch from "../../components/Fragments/TableResearch";

const Dashboard = () => {
  return (
    <>
      <Sidebar /> {/* Menampilkan sidebar */}
      <Main />
      <TableResearch />
    </>
  );
};

export default Dashboard;
