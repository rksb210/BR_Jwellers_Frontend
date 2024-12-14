import { Outlet } from 'react-router-dom';
import Sidebar from "../components/commonFiles/Sidebar"
// import Navbar from '../components/commonFiles/Navbar';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/* <Navbar /> */}
      <div className="flex-1 p-4">
        <Outlet /> {/* Renders nested routes */}
      </div>
    </div>
  );
};

export default Dashboard;
