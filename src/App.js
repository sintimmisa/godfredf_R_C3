import "./App.css";
import Portfolio from "./components/portfolio";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <h1>Portfolio</h1>
      <Portfolio />
      <Button label="Login"/>
      <Button label="Signin"/>
    </div>
  );
}

export default App;
