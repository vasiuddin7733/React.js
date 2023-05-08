import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page1, Page2, Page3 } from './containers';
import { NoPage } from './components/page1/nopage';
import { HeaderTop } from './components/header/headertop';

function App() {
  return (
    <div>
      <HeaderTop />
      <BrowserRouter>
        <Routes>
          <Route index element={<Page1 />} />
          <Route path="blogs" element={<Page2 />} />
          <Route path="contact" element={<Page3 />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
