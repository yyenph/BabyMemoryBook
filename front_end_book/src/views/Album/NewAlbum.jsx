import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import { useParams,Link } from 'react-router-dom';
// import { newEntry,currUser,albumContentLoader } from '../../utilities';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function NewAlbum() {
  // modal form
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// form details
  const [name, setName] = useState("");
  const {child_name} =useParams();
  const navigate=useNavigate()

    const addAlbum = async ()=>{
        let response = await axios.post(`/child/${child_name}/albums/add/`, {
            'name' : name,
            
        })
        console.log('addalbum.jsx',name,child_name)
        
    }

    
    const handleSubmit =async (e)=>{
        e.preventDefault();
        let response = await axios.post(`/child/${child_name}/albums/add/`, {
            'name' : name,
        })
        console.log('addalbum.jsx',name,child_name);
        setName('');
        navigate(`/${child_name}/albums`);
        
    }

  return (
    <>
      
      <button className="add-album" onClick={handleShow}>New Album</button>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Album</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit
        } id='newAlbum-form'>
            <Form.Group className="mb-3" controlId="Editchild.ControlInput1">
              <Form.Label>Album Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Album Title"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
      
          <Button variant="primary" onClick={handleClose} type='submit' form='newAlbum-form'>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewAlbum;