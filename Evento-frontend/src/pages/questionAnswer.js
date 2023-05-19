import axios from 'axios';

import React, { useEffect, useState } from 'react';


export default function FormDisplay(params) {

    const [formData,setForm] = useState({"questions":[]});

    const baseURL = "http://localhost:8080/";

    const url1 ="form/request/9";

    const attendeeId = 1;

   

    useEffect(()=>{
        const formData1 = {
            "formId": 9,
            "name": "form4",
            "description": "form2 gooddjhsjh",
            "questions": [
                {
                    "questionId": 7,
                    "question": "question1", 
                },
                {
                    "questionId": 8,
                    "question": "question2",
                },
                {
                    "questionId": 9,
                    "question": "question3", 
                }
            ],
            "eventId": 1
        }
        formData1.questions.forEach(q=>{
            q["answers"] = [{"answer":"","attendeeId":-1}]
        })


        axios.get(baseURL+url1).then((response)=>{

            if(response.data !=null){
                var f1 = response.data;
                f1.questions.forEach(q=>{
                    q["answers"] = [{"answer":"","attendeeId":attendeeId}]
                })
                setForm(f1);
            }

        }).catch((error)=>{
            console.log(error);
        })
        
    },[]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("formData",formData);
        axios.post(baseURL+"form/submit"+attendeeId,formData).then((response)=>{

        })

      };

    const handleTextboxChange = (event, questionId) => {
        var current = event.target.value;

        var tempdata = {...formData};
        tempdata.questions.map(q=>{
            if(q.questionId === questionId){
                q.answers[0].answer = current;
            }
        })

        setForm(tempdata);

        

      };
    
    return(
        <>
        <form onSubmit={handleSubmit}>
           <div>
            {formData.name}
           </div>
           <br/>
            <div>
            {formData.description}
            </div>

            <div>
                {
                formData.questions.map(q=>(<div key={q.questionId}>
                   
                <label htmlFor={q.questionId}>{q.question}</label>
                <input  id={q.questionId}
                        type="text"
                        value={q.answers[0].answer}
                        onChange={(event) => {handleTextboxChange(event,q.questionId)}}></input>
                </div>))}
            </div>
           
           <input type="submit" value="submit"></input>
            
		</form>
        </>
    );
}



// {/* <>
// <h1>hiiii</h1>
// <ListGroup>
// <div>
// {formData.map(d => <li key={d.question}>{d.question}</li>)}
// </div>
// </ListGroup>
// </> */}



// import React from 'react';
// import FormComponent from '../components/form/formQuestionAnswer';
// function AllQuestions() {
//   const data = {
//     question: 'What is your name?'
//   };

//   return (
//     <div>
//       <FormComponent question={data.question} />
//     </div>
//   );
// }

// export default AllQuestions;

















// import React from 'react';

// import FormComponent from '../components/form/formQuestionAnswer';
// function AllQuestions() {
//   const data = {
//     question: 'What is your name?'
//   };

//   return (
//     <div>
//       <FormComponent data={data} />
//     </div>
//   );
// }

// export default AllQuestions;





















// export default function AllQuestions(params) {
//     return <>
//         <h1>Question Answer</h1></>
// }