import Main from "../../components/Fragments/Main";
import Sidebar from "../../components/Fragments/Sidebar";
import TableUser from "../../components/Fragments/TableUser";

const Users = () => {
  return (
    <>
      <Sidebar /> {/* Menampilkan sidebar */}
      <Main />
      <TableUser />
    </>
  );
};

export default Users;
