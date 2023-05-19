
import React, { useState } from 'react';

function AddNewQuestion() {

    const [formTitle, setFormTitle] = useState("");
    const [formDescription, setFormDescription] = useState("");
  const [textboxes, setTextboxes] = useState(['',]); // initialize with one input field

  const addTextbox = () => {
    setTextboxes([...textboxes, '']); // add another empty input field to the array
  };

  const handleTextboxChange = (event, index) => {
    const newValues = [...textboxes];
    newValues[index] = event.target.value;
    setTextboxes(newValues);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
        title: formTitle,
        description: formDescription,
        textBoxValues: textboxes
      };
      console.log(JSON.stringify(formData));

    
  };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Form Title: ", formTitle);
//     console.log("Form Description: ", formDescription);
//     console.log(textboxes); // do something with the array of textbox values
//   };

  const handleDelete = (index) => {
    const newValues = [...textboxes];
    // const newValues = [...textBoxes];
    newValues.splice(index, 1);
    setTextboxes(newValues);
    // setTextBoxes(newValues);
  };

  return (
    
    <form onSubmit={handleSubmit}>
        
        <div>
        <label htmlFor="title">Title: </label>
        <br></br>
        <input
          type="text"
          id="title"
          placeholder="Enter form Form tile"
          value={formTitle}
          onChange={(event) => setFormTitle(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="description">Description: </label>
        <br></br>
        <input
          type="text"
          id="description"
          placeholder="Enter form Form description"
          value={formDescription}
          onChange={(event) => setFormDescription(event.target.value)}
        />
      </div>
      <br></br>

      {textboxes.map((value, index) => (
        <div key={index}>
             <label htmlFor={index}>Description: </label>
        <br></br>
        <input
          key={index}
          type="text"
          id=''
          placeholder="Enter form question"
          value={value}
          onChange={(event) => handleTextboxChange(event, index)}
        />
        
        <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))
      
      }
      <br></br>
      <button type="button" onClick={addTextbox}>
        Add Question
      </button>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddNewQuestion;






// import React, { useState } from 'react';

// function AddNewQuestion() {
//   const [textboxes, setTextboxes] = useState(['']); // initialize with one input field

//   const addTextbox = () => {
//     setTextboxes([...textboxes, '']); // add another empty input field to the array
//   };

//   const handleTextboxChange = (event, index) => {
//     const newValues = [...textboxes];
//     newValues[index] = event.target.value;
//     setTextboxes(newValues);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(textboxes); // do something with the array of textbox values
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {textboxes.map((value, index) => (
//         <input
//           key={index}
//           type="text"
//           value={value}
//           onChange={(event) => handleTextboxChange(event, index)}
//         />
//       ))}
//       <br></br>
//       <button type="button" onClick={addTextbox}>
//         Add Question
//       </button>
//       <br></br>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default AddNewQuestion;

















// import React, { useState } from 'react';

// function AddNewQuestion() {
//   const [textboxes, setTextboxes] = useState(['']); // initialize with one input field

//   const addTextbox = () => {
//     setTextboxes([...textboxes, '']); // add another empty input field to the array
//   };

//   const handleTextboxChange = (event, index) => {
//     const newValues = [...textboxes];
//     newValues[index] = event.target.value;
//     setTextboxes(newValues);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(textboxes); // do something with the array of textbox values
//   };

//   const handleDelete = (index) => {
//     const newValues = [...textboxes];
//     // const newValues = [...textBoxes];
//     newValues.splice(index, 1);
//     setTextboxes(newValues);
//     // setTextBoxes(newValues);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {textboxes.map((value, index) => (
//         <div key={index}>
//         <input
//           key={index}
//           type="text"
//           value={value}
//           onChange={(event) => handleTextboxChange(event, index)}
//         />
        
//         <button onClick={() => handleDelete(index)}>Delete</button>
//         </div>
//       ))
      
//       }
//       <br></br>
//       <button type="button" onClick={addTextbox}>
//         Add Question
//       </button>
//       <br></br>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default AddNewQuestion;






// import React, { useState } from 'react';

// function AddNewQuestion() {
//   const [textboxes, setTextboxes] = useState(['']); // initialize with one input field

//   const addTextbox = () => {
//     setTextboxes([...textboxes, '']); // add another empty input field to the array
//   };

//   const handleTextboxChange = (event, index) => {
//     const newValues = [...textboxes];
//     newValues[index] = event.target.value;
//     setTextboxes(newValues);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(textboxes); // do something with the array of textbox values
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {textboxes.map((value, index) => (
//         <input
//           key={index}
//           type="text"
//           value={value}
//           onChange={(event) => handleTextboxChange(event, index)}
//         />
//       ))}
//       <br></br>
//       <button type="button" onClick={addTextbox}>
//         Add Question
//       </button>
//       <br></br>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default AddNewQuestion;



// we have a one input text box field and a submit button and want to add more text boxes on the click of a button in react

// now in this form i want delete button in front of each textbox after clicking it the textbox should be deleted


//  import React, { useState } from 'react';

// function AddQuestion() {
//   // Set up state to hold form data
//   const [formData, setFormData] = useState({
//     Question: '',
    
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
//     <div>
//         <h1><input >Add new Questions</input></h1>

//     <form onSubmit={handleSubmit} style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '50%',
//         margin: '0 auto',
//       }}>
//       <label>
//         Name of the new Package:
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter the name"
//           value={formData.name}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br></br>
      
//       <button type="submit">Submit</button>
//     </form>
//     </div>
   
//   );
// }

// export default AddQuestion;