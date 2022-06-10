import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Alert, Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';
import AppNavbar from './AppNavbar';

class StudentAdd extends Component {

    emptyItem = {
        regNum: '',
        name: '',
        batch: '',
        department: '',

    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.regNum !== 'new') {
            const student = await (await fetch(`/api/student/${this.props.match.params.regNum}`)).json();
            this.setState({item: student});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/api/student/add' + '', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push("/")
    }

    render() {
        const {item} = this.state;
        const title = <h2>{'Add Student'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="regNum">RegNum</Label>
                        <Input type="text" name="regNum" id="regNum" value={item.regNum || ''}
                               onChange={this.handleChange} autoComplete="regNum"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="batch">Batch</Label>
                        <Input type="text" name="batch" id="batch" value={item.batch || ''}
                               onChange={this.handleChange} autoComplete="batch"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="department">Department</Label>
                        <Input type="text" name="department" id="department" value={item.department || ''}
                               onChange={this.handleChange} autoComplete="department"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/students">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default StudentAdd;