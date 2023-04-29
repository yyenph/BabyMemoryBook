import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function EditChild() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [profile_photo,setProfile_photo] =useState('');


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleImage =(e)=> {
    console.log(e.target.files)
    setProfile_photo(e.target.files[0])
}

    const handleSubmit =async (e)=>{
            
        e.preventDefault();
        const curruser = await currUser();
        console.log('addchild',curruser)
        console.log(curruser['name'])
        const username=curruser['name'];
        addChild(name, birthdate, gender,profile_photo,username);
        setName('');
        setBirthdate('');
        setGender('');
        setProfile_photo(null);
        navigate('/')
        
    }

  return (
    <>
      
      <button className="button" onClick={handleShow}>Edit Child</button>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Child</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit
        } id='editchild-form'>
            <Form.Group className="mb-3" controlId="Editchild.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="Editchild.ControlTextarea1"
            >
                <Form.Label>Birthdate</Form.Label>
                <Form.Control
                type="birthdate"
                placeholder="YYYY-MM-DD"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                autoFocus
                />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="Editchild.ControlTextarea1"
            >
                <Form.Label>Gender</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(selectedOption) => setGender(selectedOption['value'])}>
                    <option>Choose gender</option>
                    <option value="G">Girl</option>
                    <option value="B">Boy</option>
                    <option value="N">I prefer not to say</option>
                </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="Editchild.ControlTextarea1"
            >
                <Form.Label>Birthdate</Form.Label>
                <Form.Control
                    type='file'
                    name='profile_photo'
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
          <Button variant="primary" onClick={handleClose} type='submit' form='editchild-form'>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditChild;