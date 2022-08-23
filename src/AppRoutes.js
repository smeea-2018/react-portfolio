import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutMe } from "./components/AboutMe";
import Home from "./container/Home";
import Portfolio from "./components/Portfolio";
import { Resume } from "./components/Resume";
import ContactMe from "./components/ContactMe";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/aboutme" element={<AboutMe />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
      <Route path="/contactme" element={<ContactMe />}></Route>
      <Route path="/resume" element={<Resume />}></Route>
    </Routes>
  );
}

export default AppRoutes;
