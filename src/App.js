import './App.css';
import MyRoutes from './MyRoutes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
