import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class StudentList extends Component {

    constructor(props) {
        super(props);
        this.state = {students: [], isLoading: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('api/student/getAll')
            .then(response => response.json())
            .then(data => this.setState({students: data, isLoading: false}));
    }

    async remove(regNum) {
        await fetch(`/api/student/${regNum}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedStudents = [...this.state.students].filter(i => i.regNum !== regNum);
            this.setState({students: updatedStudents});
        });
    }

    render() {
        const {students, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const studentList = students.map(student => {
            return <tr key={student.regNum}>
                <td>{student.regNum}</td>
                <td style={{whiteSpace: 'nowrap'}}>{student.name}</td>
                <td>{student.batch}</td>
                <td>{student.department}</td>

                <td>
                    <ButtonGroup>
                        <Button size="sm" color="danger" onClick={() => this.remove(student.regNum)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/students/add">Add Student</Button>
                    </div>
                    <h3>My Student List</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">RegNum</th>
                            <th width="20%">Name</th>
                            <th width="20%">batch</th>
                            <th width="20%">Department</th>
                            <th width="10%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {studentList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default StudentList;