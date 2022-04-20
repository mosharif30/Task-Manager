import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/header";
import ToDoApp from "./ToDoApp/ToDoApp";

import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <ToDoApp></ToDoApp>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
