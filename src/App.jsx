import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Registration from "./components/Auth/Registration";
import Login from "./components/Auth/Login";
import Navbar from "./components/commonFiles/Navbar";
import Sidebar from "./components/commonFiles/Sidebar";
import Dashboard from "./pages/Dashboard";
import Category from "./components/adminMasters/Category";
import Product from "./components/adminMasters/Product";
import Usertable from "./components/adminMasters/Usertable";
import Customers from "./components/adminMasters/Customers";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         {/* <Route path="/login" element={<Navigate to="/login" />} />        */}
        <Route path="/registration" element={<Registration />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/navbar" element={<Navbar />}/>
        <Route path="/sidebar" element={<Sidebar />}/>
        <Route path="/" element={<Dashboard />}>
        <Route path="/category" element={<Category />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/usertable" element={<Usertable />}/>
        <Route path="/customer" element={<Customers/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;