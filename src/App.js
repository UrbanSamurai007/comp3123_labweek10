import React, {Component} from "react";
import {Card, Container, Button, Form, Row, Col } from "react-bootstrap";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            address: {
                addressOne: "",
                addressTwo: "",
                city: "",
                province: "",
                pCode: ""
            },
            tos: ""
        };
    }

    handleSubmit = (event) => {
        this.setState({
            fullName: event.target.fullName.value,
            email: event.target.email.value,
            address: {
                addressOne: event.target.addressOne.value,
                addressTwo: event.target.addressTwo.value,
                city: event.target.city.value,
                province: event.target.province.value,
                pCode: event.target.pCode.value
            },
            tos: event.target.tos.checked
        });
        console.log(this.state);
        event.preventDefault();
    };

    render() {
        return (
            <div className="App">
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Form.Group className="col-md-6">
                                <Form.Label for="name">Name</Form.Label>
                                <Form.Control type="text" name="fullName" id="fullName" placeholder="Enter your name" required />
                            </Form.Group>

                            <Form.Group className="col-md-6">
                                <Form.Label for="email">Email</Form.Label>
                                <Form.Control type="email" name="email" id="email" placeholder="Enter your email" required />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group className="col-md-12">
                                <Form.Label for="lineOne">Address Line 1</Form.Label>
                                <Form.Control type="text" name="address.addressOne" id="addressOne" placeholder="Enter your address line 1" required />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group className="col-md-12">
                                <Form.Label for="lineTwo">Address Line 2</Form.Label>
                                <Form.Control type="text" name="address.addressTwo" id="addressTwo" placeholder="Enter your address line 2" />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group className="col-md-4">
                                <Form.Label for="city">City</Form.Label>
                                <Form.Control type="text" name="address.city" id="city" placeholder="Enter your city" required />
                            </Form.Group>

                            <Form.Group className="col-md-4">
                                <Form.Label for="province">Province</Form.Label>
                                <Form.Select type="text" name="address.province" id="province" required>
                                    <option selected disabled>Select your province</option>
                                    <option value="AB">Alberta</option>
                                    <option value="BC">British Columbia</option>
                                    <option value="MB">Manitoba</option>
                                    <option value="NB">New Brunswick</option>
                                    <option value="NL">Newfoundland and Labrador</option>
                                    <option value="NS">Nova Scotia</option>
                                    <option value="ON">Ontario</option>
                                    <option value="PE">Prince Edward Island</option>
                                    <option value="QC">Quebec</option>
                                    <option value="SK">Saskatchewan</option>
                                    <option value="NT">Northwest Territories</option>
                                    <option value="NU">Nunavut</option>
                                    <option value="YT">Yukon</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="col-md-4">
                                <Form.Label for="postalCode">Postal Code</Form.Label>
                                <Form.Control type="text" name="address.pCode" id="pCode" placeholder="Enter your postal code" required />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group className="col-md-12">
                                <Form.Label for="tos">I Agree to the Terms &amp; Conditions.</Form.Label>
                                <input type="checkbox" name="tos" id="tos" value="Yes" required />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group className="col-md-12">
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form.Group>
                        </Row>
                    </Form>
                </Container>

                <Container>
                    <Card>
                        <Card.Header>
                            <Card.Title>Form Information</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Subtitle>Full Name: <text>{this.state.fullName}</text></Card.Subtitle>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Card.Subtitle>Email: <text>{this.state.email}</text></Card.Subtitle>
                                    
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Card.Subtitle>Address Line 1: <text>{this.state.address.addressOne}</text></Card.Subtitle>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Card.Subtitle>Address Line 2: <text>{this.state.address.addressTwo}</text></Card.Subtitle>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Card.Subtitle>City: <text>{this.state.address.city}</text></Card.Subtitle>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Card.Subtitle>Province: <text>{this.state.address.province}</text></Card.Subtitle>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Card.Subtitle>Postal Code: <text>{this.state.address.pCode}</text></Card.Subtitle>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default App;
