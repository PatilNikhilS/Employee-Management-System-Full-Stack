import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmployee from "./conponents/AddEmployee";
import EmployeeList from "./conponents/EmployeeList";
import Navbar from "./conponents/Navbar";
import UpadateEmployee from "./conponents/UpadateEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpadateEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
