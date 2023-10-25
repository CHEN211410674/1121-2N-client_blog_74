import { BrowserRouter,
   Routes, Route } from 
   "react-router-dom";

import BlogStaticPage_74 from "./pages/BlogStaticPage_74";
import BlogNodeSever_74 from "./pages/BlogNodeSever_74";
import HomePage_74 from "./pages/HomePage_74";
import BlogSupabase_74 from "./pages/BlogSupabase_74";

const App_74 = () => {
  return (
    <BrowserRouter>
    <Routes>

      <Route path ='/static_74'element={<BlogStaticPage_74/>}/>

      <Route path ='/node_74'element={<BlogNodeSever_74/>}/>

       <Route exact path ='/'element={<HomePage_74/>}/>

       <Route path ='/supa_74'element={<BlogSupabase_74/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App_74;
