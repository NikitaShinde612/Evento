

import { useState } from "react";

function AddPoll() {
  const [polls, setPolls] = useState([]);

  const handleAddPoll = () => {
    const newPoll = {
      question: "",
      answers: ["", "", ""],
    };
    setPolls([...polls, newPoll]);
  };

  const handleDeletePoll = (pollIndex) => {
    const newPolls = [...polls];
    newPolls.splice(pollIndex, 1);
    setPolls(newPolls);
  };

  const handleQuestionChange = (pollIndex, event) => {
    const newPolls = [...polls];
    newPolls[pollIndex].question = event.target.value;
    setPolls(newPolls);
  };

  const handleAnswerChange = (pollIndex, answerIndex, event) => {
    const newPolls = [...polls];
    newPolls[pollIndex].answers[answerIndex] = event.target.value;
    setPolls(newPolls);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(polls));
  };

  return (
      
    
    <form onSubmit={handleSubmit}>
       <h1>Add Poll Page</h1>
   <br></br>
      {polls.map((poll, pollIndex) => (
        <div key={pollIndex}>
          <label htmlFor={`question${pollIndex}`}>Question: </label>
          <input
            type="text"
            id={`question${pollIndex}`}
            value={poll.question}
            onChange={(event) => handleQuestionChange(pollIndex, event)}
          />
          {poll.answers.map((answer, answerIndex) => (
            <div key={answerIndex}>
              <label htmlFor={`answer${pollIndex}-${answerIndex}`}>
                Answer {answerIndex + 1}:{" "}
              </label>
              <input
                type="text"
                id={`answer${pollIndex}-${answerIndex}`}
                value={answer}
                onChange={(event) =>
                  handleAnswerChange(pollIndex, answerIndex, event)
                }
              />
            </div>
          ))}
          <button type="button" onClick={() => handleDeletePoll(pollIndex)}>
            Delete Poll
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddPoll}>
        Add Poll
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddPoll;


// import { useState } from "react";

// function AddPoll() {
//   const [polls, setPolls] = useState([]);

//   const handleAddPoll = () => {
//     const newPoll = {
//       question: "",
//       answers: ["", "", ""],
//     };
//     setPolls([...polls, newPoll]);
//   };

//   const handleQuestionChange = (pollIndex, event) => {
//     const newPolls = [...polls];
//     newPolls[pollIndex].question = event.target.value;
//     setPolls(newPolls);
//   };

//   const handleAnswerChange = (pollIndex, answerIndex, event) => {
//     const newPolls = [...polls];
//     newPolls[pollIndex].answers[answerIndex] = event.target.value;
//     setPolls(newPolls);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(JSON.stringify(polls));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {polls.map((poll, pollIndex) => (
//         <div key={pollIndex}>
//           <label htmlFor={`question${pollIndex}`}>Question: </label>
//           <input
//             type="text"
//             id={`question${pollIndex}`}
//             value={poll.question}
//             onChange={(event) => handleQuestionChange(pollIndex, event)}
//           />
//           {poll.answers.map((answer, answerIndex) => (
//             <div key={answerIndex}>
//               <label htmlFor={`answer${pollIndex}-${answerIndex}`}>
//                 Answer {answerIndex + 1}:{" "}
//               </label>
//               <input
//                 type="text"
//                 id={`answer${pollIndex}-${answerIndex}`}
//                 value={answer}
//                 onChange={(event) =>
//                   handleAnswerChange(pollIndex, answerIndex, event)
//                 }
//               />
//             </div>
//           ))}
//         </div>
//       ))}
//       <button type="button" onClick={handleAddPoll}>
//         Add Poll
//       </button>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default AddPoll;




// import { useState } from "react";

// function AddPoll() {
//   const [polls, setPolls] = useState([]);

//   const handleAddPoll = () => {
//     const newPoll = {
//       question: "",
//       answers: ["", "", ""],
//     };
//     setPolls([...polls, newPoll]);
//   };

//   const handleQuestionChange = (pollIndex, event) => {
//     const newPolls = [...polls];
//     newPolls[pollIndex].question = event.target.value;
//     setPolls(newPolls);
//   };

//   const handleAnswerChange = (pollIndex, answerIndex, event) => {
//     const newPolls = [...polls];
//     newPolls[pollIndex].answers[answerIndex] = event.target.value;
//     setPolls(newPolls);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(JSON.stringify(polls));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {polls.map((poll, pollIndex) => (
//         <div key={pollIndex}>
//           <label htmlFor={`question${pollIndex}`}>Question: </label>
//           <input
//             type="text"
//             id={`question${pollIndex}`}
//             value={poll.question}
//             onChange={(event) => handleQuestionChange(pollIndex, event)}
//           />
//           {poll.answers.map((answer, answerIndex) => (
//             <div key={answerIndex}>
//               <label htmlFor={`answer${pollIndex}-${answerIndex}`}>
//                 Answer {answerIndex + 1}:{" "}
//               </label>
//               <input
//                 type="text"
//                 id={`answer${pollIndex}-${answerIndex}`}
//                 value={answer}
//                 onChange={(event) =>
//                   handleAnswerChange(pollIndex, answerIndex, event)
//                 }
//               />
//             </div>
//           ))}
//         </div>
//       ))}
//       <button type="button" onClick={handleAddPoll}>
//         Add Poll
//       </button>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default function AddPoll() 
// ;




// import React, { useState } from 'react';

// function PollQuestion() {
//   // Set up state to hold form data
//   const [pollQuestion, setPollQuestion] = useState({
//     question: '',
//     option1: '',
//     option2: '',
//     option3: '',
//     option4: '',
//   });

//   const addPollQuestion = () => {
//     setPollQuestion([...pollQuestion.question,...PollQuestion.option1,...PollQuestion.option2,...PollQuestion.option3,...PollQuestion.option4, '']); // add another empty input field to the array
//   };


//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(pollQuestion);
//   };

//   // Handle form field changes
//   const handleInputChange = (event,index) => {
//      const { name, value } = event.target;
//      setPollQuestion((prevFormData) => ({ ...prevFormData, [name]: value }));
//     // const newValues = [...pollQuestion];
//     // newValues[index] = event.target.value;
//     // pollQuestion(newValues);
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//         <h1>Launch new Poll</h1>
//      <div>
//         <br></br>
//         <br></br>
//     <form onSubmit={handleSubmit} style={{
//         display: 'flex',
//         flexDirection: 'column',
        
//         textAlign: 'left',
//         justifyContent: 'center',
//         width: '50%',
//         margin: '0 auto',
//       }}>
//       <label>
//         Enter the question
//         <input
//           type="text"
//           name="question"
//           placeholder="Enter the Question"
//           value={pollQuestion.question}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br></br>
      
//       <label>
//         Option 1:
//         <input
//           type="text"
//           name="option1"
//           placeholder="Enter Option 1"
//           value={pollQuestion.option1}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br></br>
      
//       <label>
//         Option 2:
//         <input
//           type="text"
//           name="option2"
//           placeholder="Enter Option 2"
//           value={pollQuestion.option2}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br></br>
      
//       <label>
//         Option 3:
//         <input
//           type="text"
//           name="option3"
//           placeholder="Enter Option 3"
//           value={pollQuestion.option3}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br></br>

//       <label>
//         Option 4:
//         <input
//           type="text"
//           name="option4"
//           placeholder="Enter Option 4"
//           value={pollQuestion.option4}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br></br>
      
//       <button type="submit">Submit</button>
//       <button type="button" onClick={addPollQuestion}>
//         Add Poll
//       </button>
//     </form>
//     </div>
//     </div>
//   );
// }

// export default PollQuestion;


// /*First Trial
// const numbers = [1, 2, 3, 4, 5];

// function PollQuestion(props){
//     const [option,setFormData]=useState("Enter Option");
//     const delOption=()=>{
//       setFormData("");  
//       }

//       const handleInputChange = (event) => {
        
//         setFormData(event.target.value);
//       };
    
//     return(
        
//         <div >
          
//             <container class="d-flex justify-content-center"  >
//             <Form.Group className="mb-3" controlId="formBasicPassword">
//         {numbers.map(n=><div ><Container><Row><Col ><Form.Control type="option" placeholder={option} value={option} onChange={handleInputChange}/></Col><Col><Button variant="danger" onClick={delOption}>Delete</Button>{' '}</Col></Row></Container><br></br></div>)}
//            </Form.Group>
//            </container>
//           <div class="d-flex justify-content-center"><Button variant="primary" type="submit">
//         Submit
//          </Button></div>
//       <br></br>
//       <div class="d-flex justify-content-center"><Button variant="success">Add</Button>{' '}</div>
//         </div>
//     );   
// }