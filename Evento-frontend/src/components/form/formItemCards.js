import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';





function BasicExample(params) {
    return (
      <Card style={{ width: '18rem' }} className="mx-auto d-flex align-items-center">
       
        <Card.Body>
          <Card.Title>{params.data.name}</Card.Title>
          <Card.Text>
            Total Questions : x
          </Card.Text>
          <Button variant="primary">Edit</Button>
          <br></br>
           <br></br>
          <Button variant="primary">Delete</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default BasicExample;


