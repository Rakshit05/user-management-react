import './App.css';
import Home from './Pages/Home.tsx';
import Signup from './Pages/Signup.tsx';
import Header from './componenets/Header.tsx';
import {
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </div>
  );
}


export default App;
