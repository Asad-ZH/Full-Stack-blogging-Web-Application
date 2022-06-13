import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar bg-light">
        <form className="container-fluid justify-content-start">
          <button className="btn btn-outline-success me-2" type="button">
            Main button
          </button>
          <button className="btn btn-sm btn-outline-secondary me-2" type="button">
            Smaller button
          </button>
        </form>
      </nav>
    </>
  );
}

export default App;
