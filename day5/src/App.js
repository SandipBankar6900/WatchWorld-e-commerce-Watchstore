import "./App.css";
import { Navbar } from "../src/Components/Navbar";
import { AllRoutes } from "../src/Routes/Allroutes";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      </div>
  );
}