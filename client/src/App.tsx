import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AttachPage from "@/pages/attach";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AttachPage />} path="/attach" />
    </Routes>
  );
}

export default App;
