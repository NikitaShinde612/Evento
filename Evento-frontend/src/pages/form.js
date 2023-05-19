
import { ListGroup } from 'react-bootstrap';

import MyForm from '../components/subscription/addForm';
import BasicExample from '../components/form/formItemCards';
export default function FormPage(params) {

const formData=[
    {
        "id": 8,
        "formId": 8,
        "name": "form3",
        "description": "form2 gooddjhsjh",
        "questions": [
            {
                "questionId": 4,
                "question": "question1"
            },
            {
                "questionId": 5,
                "question": "question2"
            },
            {
                "questionId": 6,
                "question": "question3"
            }
        ],
        "eventId": 1
    }
]







    // const formData = [
        
    //         {
    //             "formId": 1,
    //             "name": "form1",
    //             "description": "form1 good form",
    //             "questions": [],
    //             "eventId": 1
    //         },
    //         {
    //             "formId": 2,
    //             "name": "form2",
    //             "description": "form2 bad form too",
    //             "questions": [],
    //             "eventId": 1
    //         },
    //         {
    //             "formId": 3,
    //             "name": "form3",
    //             "description": "form2 bad form toowee23",
    //             "questions": [],
    //             "eventId": 1
    //         },
    //         {
    //             "formId": 4,
    //             "name": "form4",
    //             "description": "form2 gooddjhsjh",
    //             "questions": [],
    //             "eventId": 1
    //         },
    //         {
    //             "formId": 5,
    //             "name": "form5",
    //             "description": "form2 bad form toowee23",
    //             "questions": [],
    //             "eventId": 1
    //         },
    //         {
    //             "formId": 6,
    //             "name": "form6",
    //             "description": "form2 bad form toowee23",
    //             "questions": [],
    //             "eventId": 1
    //         },
    //         {
    //             "formId": 7,
    //             "name": "form7",
    //             "description": "form2 bad form toowee23",
    //             "questions": [],
    //             "eventId": 1
    //         }
        
    // ]
    
    return(
        <>
          <ListGroup>
          <div className='d-inline block d-flex'  >
            {formData.map(f=><ListGroup.Item ><BasicExample data={f}></BasicExample></ListGroup.Item>)}
            </div>
        </ListGroup>
        
        </>
        
      );
}


// return(
//     <>
//       <ListGroup>
//       <div className='d-inline block d-flex' >
//         {formData.map(f=><ListGroup.Item ><BasicExample data={f}></BasicExample></ListGroup.Item>)}
//         </div>
//     </ListGroup>
//     </>
//   );
