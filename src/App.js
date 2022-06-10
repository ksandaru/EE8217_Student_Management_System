import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from "./Components/StudentList";
import Home from "./Components/Home";
import StudentAdd from "./Components/StudentAdd";

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/students' element={<StudentList/>} />
                    <Route path='/students/add' element={<StudentAdd/>} />
                </Routes>


            </Router>
        )
    }
}

export default App;