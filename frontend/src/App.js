import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page1, Page2, Products,Product } from './containers';
import { NoPage } from './components/page1/nopage';
import { Individual } from './components/page2/individual';
import { Registration } from './components/registration/registration';

function App() {
  return (
<BrowserRouter>
    <div>
        <Routes>
        <Route path="signup" element={<Registration />} />
          <Route index element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page2/:id" element={<Individual />} />
          <Route path="page2?id" element={<Individual />} />
          <Route path="products" element={<Products />} />
          <Route path="product" element={<Product />} />
          <Route path="*" element={<NoPage />} />
          <Route component={Error}/>
      </Routes>
    </div> 
</BrowserRouter>
    
  )
}
export default App;
