import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page1, Page2, Page3 } from './containers';
import { NoPage } from './components/page1/nopage';
import { Individual } from './components/page2/individual';

function App() {
  return (
<BrowserRouter>
    <div>
        <Routes>
          <Route index element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page2/:id" element={<Individual />} />
          <Route path="page2?id" element={<Individual />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="*" element={<NoPage />} />
          <Route component={Error}/>
      </Routes>
    </div> 
</BrowserRouter>
    
  )
}
export default App;
