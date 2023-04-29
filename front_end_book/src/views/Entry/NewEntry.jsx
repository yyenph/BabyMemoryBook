import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useParams,Link } from 'react-router-dom';
import { newEntry,currUser,albumContentLoader } from '../../utilities';


function NewEntry() {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [image,setImage] =useState('');
    const [caption, setCaption] = useState("");
    const {album_name}=useParams();
    const {child_name}=useParams();


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleImage =(e)=> {
    console.log(e.target.files)
    setImage(e.target.files[0])
}
    
    const handleSubmit =async (e)=>{
        
            e.preventDefault();
            const curruser = await currUser();
            const username=curruser['name'];
            newEntry(title, date, image,caption,album_name,username,child_name);
            albumContentLoader()
            setTitle('');
            setDate('');
            setImage(null);
            setCaption('');
            navigate(`/${child_name}/${album.name}/`)
            
    }
  return (
    <>
      
      <button className="new-entry-button" onClick={handleShow}>New Entry</button>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit
        } id='newEntry-form'>
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
      
          <Button variant="primary" onClick={handleClose} type='submit' form='newEntry-form'>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewEntry;