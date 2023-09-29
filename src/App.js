import "./App.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Body/>} />
        <Route exact path="/offers" element={<Body/>} />
        <Route exact path="/signin" element={<Body/>} />
        <Route exact path="/cart" element={<Body/>} />
        <Route exact path="/restaurant/:resId" element={<RestaurantMenu/>} />
      </Routes>
      

      </Router>
   
    </div>
  );
}

export default App;
