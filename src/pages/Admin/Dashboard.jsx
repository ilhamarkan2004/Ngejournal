import Main from "../../components/Fragments/Main";
import Sidebar from "../../Sidebar";
import TableUser from "../../components/Fragments/TableUser";

const Dashboard = () => {
  return (
    <>
      <Sidebar /> {/* Menampilkan sidebar */}
      <Main />
      <TableUser />
    </>
  );
};

export default Dashboard;
