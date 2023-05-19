import React, { useState } from 'react';

function MyFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Value: ${value}`);
    setIsOpen(false);
  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={toggleModal}>Open Form</button>
      {isOpen && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <label>
              Enter a value:
              <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
            <button type="button" onClick={toggleModal}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}



export default MyFormModal();



// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// export default function newForm({show,handleClose,handleShow}) {


//   return (
   
//     <Modal show={show} onHide={handleClose}>
//     <Modal.Header closeButton>
//       <Modal.Title>Modal heading</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//     <Modal.Footer>
//       <Button variant="secondary" >
//         Close
//       </Button>
//       <Button variant="primary" >
//         Save Changes
//       </Button>
//     </Modal.Footer>
//   </Modal>
    
//   );
// }

