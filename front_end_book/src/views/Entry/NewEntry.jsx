import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function NewEntry() {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [image,setImage] =useState('');
    const [caption, setCaption] = useState("");
  


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleImage =(e)=> {
    console.log(e.target.files)
    setImage(e.target.files[0])
}
    
    const handleSubmit =async (e)=>{
        
            // e.preventDefault();
            // const curruser = await currUser();
            // console.log('addchild',curruser)
            // console.log(curruser['name'])
            // const username=curruser['name'];
            // addChild(name, birthdate, gender,profile_photo,username);
            // setName('');
            // setBirthdate('');
            // setGender('');
            // setProfile_photo(null);
            // navigate('/')
            
    }
  return (
    <>
      
      <button className="addChild-button" onClick={handleShow}>New Entry</button>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit
        }>
            <Form.Group className="mb-3" controlId="Editchild.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="Editchild.ControlTextarea1"
            >
                <Form.Label>Date</Form.Label>
                <Form.Control
                type="text"
                placeholder="YYYY-MM-DD"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                autoFocus
                />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="Editchild.ControlTextarea1"
            >
                <Form.Label>Caption</Form.Label>
                <Form.Control
                type="text"
                placeholder="What is special about this day"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                autoFocus
                />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="Editchild.ControlTextarea1"
            >
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                    type='file'
                    name='image'
                    onChange={handleImage}
                    autoFocus
                />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewEntry;