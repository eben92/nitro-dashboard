import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ViewCard from "./components/viewCard";

function App() {
  return (
    <BrowserRouter>
      <div className='text-white bg-white dark:bg-gray-900'>
        <ViewCard />
      </div>
    </BrowserRouter>
  );
}

export default App;
