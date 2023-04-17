import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Huquq from "./Pages/Huquq";
import Psixologiya from "./Pages/Psixologiya";
import Tibbiyot from "./Pages/Tibbiyot";
import Fitnes from "./Pages/Fitnes";
import Kiyimlar from "./Pages/Kiyimlar";
import MadaniyHordiq from "./Pages/MadaniyHordiq";
import Takliflar from "./Pages/Takliflar";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Logo from "./Pages/Logo";

function App() {
  return (
    <div className="container-fluid w-full min-h-screen bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Logo/>} />
        <Route path="/huquq" element={<Huquq />} />
        <Route path="/psixologiya" element={<Psixologiya />} />
        <Route path="/tibbiyot" element={<Tibbiyot />} />
        <Route path="/fitnes" element={<Fitnes />} />
        <Route path="/kiyimlar" element={<Kiyimlar />} />
        <Route path="/madaniyhordiq" element={<MadaniyHordiq />} />
        <Route path="/takliflar" element={<Takliflar />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
