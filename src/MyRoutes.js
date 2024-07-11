import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Demo from "./pages/Demo"
import Login from "./pages/Login"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function MyRoutes() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
    );
}