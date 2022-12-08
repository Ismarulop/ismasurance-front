import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SignUpForm.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function FormItems() {
    const [userName,setUserName]= useState('');
    const [password,setPassword]= useState('');
    const [email,setEmail]= useState('');
    const [phone,setPhone]= useState('');
    const [country,setCountry]= useState('');

    const handlerCreateUser= (e)=>{
        e.preventDefault();
        const user= {userName,password,email,phone,country}
        console.log(user);
        fetch('http://localhost:8080/user/createUser',{
            method : "POST",
            headers :{"Content-Type":"application/json"},
            body:JSON.stringify(user)

        }).then(()=>{
            console.log("Correct user");
        });
    }
    
    return (
        <Container>
        <Form id="form-login">
            <Form.Group className="mb-3" controlId="formBasicUser">
                <Row>
                    <Col xs={10}>
                        <Form.Control type="text" placeholder="Enter user" 
                        value={userName}
                        onChange= {(e) =>setUserName(e.target.value) }/>
                    </Col>
                </Row>
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row>
                    <Col xs={10}>
                        <Form.Control type="email" placeholder="email" 
                         value={email}
                         onChange= {(e) =>setEmail(e.target.value) }/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Row>
                    <Col xs={10}>
                        <Form.Control type="text" placeholder="phone" 
                         value={phone}
                         onChange= {(e) =>setPhone(e.target.value) }/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCountry">
                <Row>
                    <Col xs={10}>
                        <Form.Control type="text" placeholder="country" 
                         value={country}
                         onChange= {(e) =>setCountry(e.target.value) }/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Row>
                    <Col xs={10}>
                        <Form.Control type="password" placeholder="Password" 
                         value={password}
                         onChange= {(e) =>setPassword(e.target.value) }/>
                    </Col>
                </Row>
            </Form.Group>
            <Row>
                <Col xs={90}>
                    <Button variant="primary" type="submit" onClick={handlerCreateUser} >
                        Enviar
                    </Button>
                </Col>
            </Row>
           
        </Form>
        {userName}
        <br></br>
        {password}
        </Container>
    );
}

export default FormItems; 