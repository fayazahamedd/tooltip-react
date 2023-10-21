import Button from "@mui/material/Button";
import ArrowTooltips from "./components/tooltip";
import "../src/components/TooltipStyles.css"; // Import your CSS file for styling
import "./App.css";

const App = () => {
  return (
    <>
      <h1>Tool Tip</h1>
      <div className="card">
        <ArrowTooltips>
          <Button className="custom-button">Hover Here..!</Button>
        </ArrowTooltips>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
