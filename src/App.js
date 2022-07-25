import logo from "./logo.svg";
import "./App.css";
import Login from "./Controllers/LoginController";
function App() {
  return (
    <div className="App vh-100">
      <div className="container vh-100 d-flex align-items-center">
        <div className="description d-flex flex-column text-start">
        <h2>Checking a username is already exists or not.</h2>
        <span>
        <h5 className="d-inline-block">Hint:</h5>
        <p className="d-inline-block ms-2"> Try using a same username more than once</p>
        </span>
        </div>
        <div className="col-md-4 mx-auto">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
