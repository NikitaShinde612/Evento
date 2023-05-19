
import { ListGroup } from 'react-bootstrap';
import MyForm from '../components/subscription/addForm';
// import Subscription from '../components/subscription/addSubscription';
import AddSubscription from '../components/subscription/addSubscription';
export default function subscriptionsPage(params) {
    
    const subscriptionData = [
        
        {
            
            "name": "Free Trial",
            "price": " $ 0",
            "description": "le free me bhikari ",
            "Action": "Start Trial"
        },
        {
            "name": "Basic",
            "price": "$200",
            "description": "Thik thak hai",
            "Action": "Get Started"
        },
        {
            "name": "Premium",
            "price": "$ 500",
            "description": "bohot achha hai",
            "Action": "Get Started"
        }
        
    
]
       

return(
    <>
    <h1 align="center">Choose Your Subscription Plan</h1>
    <br></br>
    <br></br>
    <br></br>
     
      <ListGroup>
      <div className='d-inline block d-flex' >
        {subscriptionData.map(f=><ListGroup.Item ><AddSubscription data={f}></AddSubscription></ListGroup.Item>)}
        </div>
        </ListGroup>

        <MyForm></MyForm>
        
    </>
  );
}












// import { ListGroup } from 'react-bootstrap';
// // import Subscription from '../components/subscription/addSubscription';
// import AddSubscription from '../components/subscription/addSubscription';
// export default function subscriptionsPage(params) {
    
//     const subscriptionData = [
        
//         {
            
//             "name": "Free Trial",
//             "price": " $ 0",
//             "description": "le free me bhikari ",
//             "Action": "Start Trial"
//         },
//         {
//             "name": "Basic",
//             "price": "$200",
//             "description": "Thik thak hai",
//             "Action": "Get Started"
//         },
//         {
//             "name": "Premium",
//             "price": "$ 500",
//             "description": "bohot achha hai",
//             "Action": "Get Started"
//         }
        
    
// ]
       

// return(
//     <>
//     <h1 align="center">Choose Your Subscription Plan</h1>
    
//       <ListGroup>
//         {subscriptionData.map(f=><ListGroup.Item ><AddSubscription data={f}></AddSubscription></ListGroup.Item>)}
//         </ListGroup>
//     </>
//   );
// }
