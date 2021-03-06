import { BrowserRouter } from "react-router-dom";
import history from "./history";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter history={history}>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
