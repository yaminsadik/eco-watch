import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@pages/Home"));
const Demo = lazy(() => import("@pages/Demo"));
const Login = lazy(() => import("@pages/Login"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const ContactUs = lazy(() => import("@pages/ContactUs"));
const FAQ = lazy(() => import("@pages/FAQ"));
const PrivacyPolicy = lazy(() => import("@pages/PrivacyPolicy"));

function PageLoader(): JSX.Element {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <span className="text-gray-400 text-sm">Loading…</span>
    </div>
  );
}

export default function AppRouter(): JSX.Element {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Suspense>
  );
}
