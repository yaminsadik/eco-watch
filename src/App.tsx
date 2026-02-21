import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import AppRouter from "./router";

export default function App(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}
