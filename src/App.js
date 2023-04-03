import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import MiniData from "./components/MiniData";
import Info from "./components/Info";
import Service from "./components/Service";
import Data from "./components/Data";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="About" element={<About />} />
          <Route path="contact" element={<Info />} />
          <Route path="service" element={<Service />} />
          <Route path="Price" element={<MiniData />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
