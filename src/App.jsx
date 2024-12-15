import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Contexts
import {PostProvider} from './contexts/PostsContext';



// layout
import DefaultLayout from './layouts/DefaultLayout';
import AlternativeLayout from './layouts/AlternativeLayout';

// pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import PostPage from "./components/PostsPage"

function App() {
  return (
    <PostProvider>
    <BrowserRouter>
      <Routes>
        {/* Rotte con layout classico */}
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="*" Component={NotFoundPage} />
          <Route path='/posts' Component={PostPage}/>
        </Route>
        {/* Rotte con layout alternativo */}
        <Route Component={AlternativeLayout}>{/*  */}</Route>
      </Routes>
    </BrowserRouter>
    </PostProvider>
  );
}
export default App;
