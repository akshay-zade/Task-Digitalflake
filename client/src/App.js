import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage';
import Signup from './components/SignupPage/Signup';
import HomePage from './components/HomePage/Home'
import Category from './components/Category/Category';
import Product from './components/Product/Product';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import Categoerylist from './components/Category/Categoerylist';

function App() {
  return (
   <BrowserRouter>
   
      <Routes>

        <Route path='/' Component={Signup} />
        <Route path='/login' Component={LoginPage } />
        <Route path='/sidebar' Component={Sidebar } />
        <Route path='/category' Component={Category} />
        <Route path='/product' Component={Product} />
         <Route path='/home' Component={Home} />
         <Route path='/categorylist' Component={Categoerylist} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
