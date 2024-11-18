import { BrowserRouter } from "react-router-dom";
import { Routes as Route } from "./routes/Routes";
import { Sidebar } from "./components/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex w-full flex-row justify-between items-start h-screen overflow-hidden bg-[#F4F7F9]">
        <Sidebar />
        <div className="w-full p-8 pb-0 pr-14 h-full overflow-auto flex justify-center items-center">
          <Route />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
