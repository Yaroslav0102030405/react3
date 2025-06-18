// import { useState, useEffect } from 'react';
import {Suspense, lazy, useState} from "react";
import { Routes, Route } from "react-router";
import Context from "./assets/components/auth/auth.tsx";
import UserMenu from "./assets/components/userManu/userMenu.tsx";
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


interface User {
    name: string,
    email: string,
    avatar: string
}

function App() {
  const [user, setUser] = useState<User | null>(null)
//  const { name, email, avatar } = user;
 const { name, email, avatar } = user || { name: '', email: '', avatar: '' };
  const userValue = {
    name,
    email,
    avatar,
  }

  const exampleLoggedInUser: User = {
    name: "Mango",
    email: "mango@gmail.com",
    avatar: "https://c0.klipartz.com/pngpicture/340/946/gratis-png-avatar-usuario-computadora-iconos-desarrollador-de-software-avatar-thumbnail.png"
  };


const login = () => {
setUser(exampleLoggedInUser)
}

const logOut = () => {
  setUser(null)
}

  return (
    <>
    <Context.Provider value={userValue}>
    <AppBar />
    <UserMenu />

     {user ? (
        <>
          <p>Привіт, {user.name}!</p>
          <button onClick={logOut}>Вийти</button>
        </>
      ) : (
        <>
          <p>Будь ласка, увійдіть.</p>
          <button onClick={login}>Увійти</button>
        </>
      )}
   
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
      </Context.Provider>
    </>
  );
}

export default App;
