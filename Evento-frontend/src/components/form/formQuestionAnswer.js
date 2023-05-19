import React, { useState } from 'react';

function FormComponent(props) {
  const [answer, setAnswer] = useState('');


  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      question: props.question,
      answer: answer
    };
    console.log(JSON.stringify(data));
  }
//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(props.question, answer);
//   }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="question">Question:</label>
        <input id="question" type="text" value={props.question} disabled />
      </div>
      <div>
        <label htmlFor="answer">Answer:</label>
        <input id="answer" type="text" value={answer} onChange={(event) => setAnswer(event.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;




















// import React, { useState, useEffect } from 'react';

// function FormComponent(props) {
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');

//   useEffect(() => {
//     setQuestion(props.data.question);
//   }, [props.data.question]);

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(answer);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder={question} value={answer} onChange={(event) => setAnswer(event.target.value)} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default FormComponent;
