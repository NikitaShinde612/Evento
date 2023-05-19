import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap';

export default function ClientDetails(params) {
    const client = {
        "id": 2,
        "userName": "Santosh Dahatre1456",
        "email": "shubha121112m@gmail.com",
        "phone": "10101115",
        "planActivationDate": "2023-03-01T16:18:24.666689",
        "durationOfPlan": "2013-02-08T14:22:22"
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var listforevents = [];

    for (let index = 0; index < 10; index++) {


        listforevents.push(<ListGroup.Item>User Name {client.userName}</ListGroup.Item>);
        
    }

    return <>
    <Button variant="primary" onClick={handleShow}>
      Launch
    </Button>

    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
          <div style={{width:"300px"}}>
            <ListGroup>
                {listforevents}
                <ListGroup.Item>User Name {client.userName}</ListGroup.Item>
                <ListGroup.Item>email {client.email}</ListGroup.Item>
                <ListGroup.Item>phone {client.phone}</ListGroup.Item>
            </ListGroup>
          </div>
      </Offcanvas.Body>
    </Offcanvas>
  </>
}