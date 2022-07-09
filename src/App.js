import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';



function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
