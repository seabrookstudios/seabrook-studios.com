import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopMenu } from "./shared/TopMenu";
import { Footer } from "./shared/Footer";
import { HomePage } from "./pages/HomePage";
import { GamePage } from "./pages/GamePage";

function App() {
  return (
    <BrowserRouter>
      <div className="justify-between flex flex-col bg-white border-black border-l border-r">
        <div className="flex flex-col flex-grow ">
          <TopMenu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="games/:slug" element={<GamePage />} />
            <Route path="expansions/:slug" element={<GamePage />} />
          </Routes>
        </div>
        <div className="flex-0 justify-self-end">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
