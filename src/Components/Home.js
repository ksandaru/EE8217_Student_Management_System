import React, { Component } from 'react';
import '../App.css';
import StudentList from "./StudentList";
import AppNavbar from "./AppNavbar";
class Home extends Component {
    render() {
        return (
            <div>
                <StudentList/>
            </div>
        );
    }
}

export default Home;