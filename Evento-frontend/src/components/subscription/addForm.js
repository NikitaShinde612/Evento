


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';


function MyForm() {
  // Set up state to hold form data
  const [formData, setFormData] = useState({
    "name": "",
    "price": "",
    "duration": "",
    "discount": 0,
    "description": "",
    "active": true
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const navigate = useNavigate();

  const data = {
         
    "name": "plan4",
    "price": 250,
    "duration": "2013-02-05T14:22:22",
    "discount": 13.9,
    "description": "trail description4",
    "active": true
}


    const baseURL = "http://localhost:8080/";

    const url ="subscription/add";

    useEffect(() => {
        
        
      }, []);


  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    axios.post(baseURL+url,formData).then((response) => {
        if(response.data != null)
        console.log("ResponseData:: "+response.data);
        navigate("/dashboard")
      }).catch((error)=>{
        navigate("/nopage")
      });

      handleClose();

  };

  // Handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Subscription</Modal.Title>
        </Modal.Header>
        <Modal.Body><form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        
        textAlign: 'left',
        justifyContent: 'center',
        width: '50%',
        margin: '0 auto',
      }}>
      <label>
        Name of the new Package:
        <input
          type="text"
          name="name"
          placeholder="Enter the name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br></br>
      
      <label>
        Detail Description:
        <input
          type="text"
          name="description"
          placeholder="Enter Description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </label>
      <br></br>
      
      <label>
        Pricing Details:
        <input
          type="text"
          name="price"
          placeholder="Enter the price"
          value={formData.price}
          onChange={handleInputChange}
        />
      </label>
      <br></br>
      
      <label>
        discount:
        <input
          type="text"
          name="discount"
          placeholder="Enter Message if any"
          value={formData.discount}
          onChange={handleInputChange}
        />
      </label>

      <br></br>
      
      <label>
        duration:
        <input
          type="datetime-local"
          name="duration"
          placeholder="Enter Message if any"
          value={formData.duration}
          onChange={handleInputChange}
        />
      </label>

      <br></br>
      
      <label>
        Active:
        <input
          type="text"
          name="active"
          placeholder="Enter Message if any"
          value={formData.active}
          onChange={handleInputChange}
        />
      </label>

      <br></br>
      
      {/* <button type="submit">Submit</button> */}
    </form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        
    
    </div>
  );
}

export default MyForm;











// import React, { useState } from 'react';

// function MyForm() {
//   // Set up state to hold form data
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   // Handle form field changes
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({ ...prevFormData, name: value }));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//         />
//       </label>
//       <label>
//         Message:
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleInputChange}
//         />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default MyForm;





















// import React, { useState } from 'react';

// function MyForm() {
//   // Set up state to hold form data
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     message: '',
//   });

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   // Handle form field changes
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name of the new Package:
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br></br>
//       <br></br>
//       <label>
//         Detail Description:
//         <input
//           type="text"
//           name="email"
//           value={formData.description}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br></br>
//       <br></br>
//       <label>
//         Pricing Details:
//         <input
//           type="text"
//           name="email"
//           value={formData.price}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br></br>
//       <br></br>
//       <label>
//         Message:
//         <input
//           type="text"
//           name="name"
//           value={formData.message}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br></br>
//       <br></br>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default MyForm;
















// import Button from 'react-bootstrap/Button';
// import { useState } from 'react';


// function MyForm() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
  
//     const handleNameChange = (event) => {
//       setName(event.target.value);
//     };
  
//     const handleEmailChange = (event) => {
//       setEmail(event.target.value);
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       console.log('Name:', name);
//       console.log('Email:', email);
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={handleNameChange} />
//         </label>
//         <br></br>
//         <br></br>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </label>
//         <br></br>
//         <br></br>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
  
//   export default MyForm;






// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function LaunchSubscription() {
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Name of the Subscription package</Form.Label>
//         <Form.Control type="email" placeholder="Enter Name" />
        
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Description of the Package</Form.Label>
//         <Form.Control type="password" placeholder="Enter the Details" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Pricing Details</Form.Label>
//         <Form.Control type="email" placeholder="Enter the price" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter the Message</Form.Label>
//         <Form.Control type="email" placeholder="Message" />
        
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default LaunchSubscription;