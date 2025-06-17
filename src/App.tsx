// import { useState, useEffect } from 'react';
import {Suspense, lazy} from "react";
import { Routes, Route } from "react-router";
// import axios from 'axios';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
// import Painting from './assets/components/Painting/Painting';
// import type { IPaintingProps } from './assets/components/Painting/type';
// import Home from './assets/routes/home';
// import About from './assets/routes/about';
// import NotFound from './assets/routes/notfound';
// import Books from './assets/routes/books';
// import BookId from './assets/routes/bookId';
import  routes  from "./assets/routes/routes";
import AppBar from './assets/components/Painting/appBar/appBar';

const Home = lazy(() => import('./assets/routes/home.tsx') )
const About = lazy(() => import('./assets/routes/about.tsx') )
const Books = lazy(() => import('./assets/routes/books.tsx') )
const BookId = lazy(() => import('./assets/routes/bookId.tsx') )
const NotFound = lazy(() => import('./assets/routes/notfound.tsx') )
function App() {

  return (
    <>
    <AppBar />
   
   <Suspense fallback={<h1>Загружаємо...</h1>}>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path={routes.about} element={<About/>} />
      <Route path={routes.books} element={<Books/>} />
      <Route path={routes.bookId} element={<BookId/>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </Suspense>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {/* <Painting painting={painting} /> */}
    </>
  );
}

export default App;
