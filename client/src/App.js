import RegisterUser from "./components/RegisterUser";
import EditUser from "./components/EditUser";
import ReadUser from "./components/ReadUser";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ReadUser />} />
        <Route path="/getuser" element={<ReadUser />} />
        <Route path="/adduser" element={<RegisterUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
