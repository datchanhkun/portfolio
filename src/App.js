import React from 'react'
import './App.css'
import BlogScreen from 'pages/Blog/BlogScreen'
import HomeScreen from 'pages/Home/HomeScreen'
import NotFound from 'pages/NotFound/NotFound'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import ArticleDetail from 'pages/ArticleDetailScreen/ArticleDetailScreen'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/blog" element={<BlogScreen />} />
          <Route path='/blog/:slug' element={<ArticleDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
