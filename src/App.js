
import './App.css';
import AddUsers from './components/AddUsers';
import PageNotFound from './components/PageNotFound';
import AllUsers from './components/AllUsers';
import CodeForLife from './components/CodeForLife';
import Navbar from './components/Navbar';
import EditUsers from "./components/EditUser";
import {BrowserRouter, Route, Routes } from "react-router-dom"; 
 



const App =()=>{
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<CodeForLife/>} />
        <Route exact path="/add" element={<AddUsers/>} />
        <Route exact path="/all" element={<AllUsers/>} />
        <Route exact path="/edit/:id" element={<EditUsers/>}/>
        <Route element={<PageNotFound/>} />
        </Routes>
       
        </BrowserRouter>
    )
}

export default App;