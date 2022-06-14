import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm.js";

function App() {
  return (
    <>
    <Navbar home="TextUtils" aboutText="about Us" />
    <div className="container my-3" >
      <TextForm heading = "Enter Random keywords"/>
      {/* <About/> */}
    </div>
      </>
  );
}

export default App;
