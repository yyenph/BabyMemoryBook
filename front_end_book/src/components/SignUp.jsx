import { useContext, useState } from "react";
import { signUp } from "../utilities";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export default function SignUp(){

    // modal form
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext);
    const navigate=useNavigate();


    const handleSubmit = async(e)=>{
            e.preventDefault();
            await signUp(name,email,password);
            setName('');
            setEmail('');
            setPassword('');
            setUser(null);
            navigate('/')
            
        }

    return (
        <>
      
            <button className="signup-btn" onClick={handleShow}>Sign Up</button>
            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleSubmit
                } id='signUp-form'>
                    <Form.Group className="mb-3" controlId="Editchild.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Editchild.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Editchild.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            
                <Button variant="primary" onClick={handleClose} type='submit' form='signUp-form'>
                    Sign Up
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        // <form onSubmit={(e)=>{[
        //     e.preventDefault(),
        //     signUp(name,email,password),
        //     setName(''),
        //     setEmail(''),
        //     setPassword('')
        //     ]
        // }}>
        //     <input
        //         placeholder="name"
        //         value={name}
        //         onChange={(e) => setName(e.target.value)}
        //     />
        //     <input
        //         placeholder="email"
        //         value={email}
        //         onChange={(e) => setEmail(e.target.value)}
        //     />
        //     <input
        //         placeholder="password"
        //         type="password"
        //         value={password}
        //         onChange={(e) => setPassword(e.target.value)}
        //     />
        //     <input type="submit" value="signUp" />
    
        // </form>
    )
}