import { BrowserRouter } from "react-router-dom";
import { Routes as Route } from "./routes/Routes";
import { Sidebar } from "./components/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex w-full flex-row justify-between items-start h-full overflow-hidden bg-[#F4F7F9] relative">
        <Sidebar />
        <div className="w-full p-8 pb-0 pr-14 h-fit flex justify-center items-center">
          <Route />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
