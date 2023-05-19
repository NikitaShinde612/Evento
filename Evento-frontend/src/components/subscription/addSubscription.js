// import React from "react";

// const CardContainer = ({ cards }) => {
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap" }}>
//       {cards.map((card) => (
//         <div
//           key={card.id}
//           style={{
//             width: "300px",
//             margin: "10px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             padding: "10px",
//             boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
//           }}
//         >
//           <img
//             src={card.image}
//             alt={card.title}
//             style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
//           />
//           <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
//             {card.title}
//           </h2>
//           <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
//             {card.description}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardContainer;






import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function AddSubscription(params) {
  return (
    <Card style={{ width: '18rem' }} className="mx-auto d-flex align-items-center" >
      
      <Card.Body>
        <Card.Title>{params.data.name}</Card.Title>
        <Card.Text>
            {params.data.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> {params.data.price}</ListGroup.Item>
        <ListGroup.Item> {params.data.Action}</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Buy Now</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default AddSubscription; 

// import { Card, Button } from 'react-bootstrap';

// function Subscription() {
//   return (
//     <div>
//       <h1>Choose a Plan</h1>
//       <Card>
//         <Card.Header>Basic Plan</Card.Header>
//         <Card.Body>
//           <Card.Title>$10 per month</Card.Title>
//           <Card.Text>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ex euismod, pulvinar risus quis, fringilla ex. Nunc vitae dapibus magna. Integer tristique finibus lorem, eu convallis enim elementum in.
//           </Card.Text>
//           <Button variant="primary">Subscribe</Button>
//         </Card.Body>
//       </Card>
//       <Card>
//         <Card.Header>Premium Plan</Card.Header>
//         <Card.Body>
//           <Card.Title>$20 per month</Card.Title>
//           <Card.Text>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ex euismod, pulvinar risus quis, fringilla ex. Nunc vitae dapibus magna. Integer tristique finibus lorem, eu convallis enim elementum in.
//           </Card.Text>
//           <Button variant="primary">Subscribe</Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default Subscription;























// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';





// function BuySubscription(params) {
//     return (
//         <h1>Choose Your Plan</h1>
//       <Card  className="mx-auto d-flex align-items-center">
       
//         <Card.Body>
//           <Card.Title>{params.data.name}</Card.Title>
//           <Card.Text>
//             {params.data.description}
//           </Card.Text>
//           <Button variant="primary">Edit</Button>
//           <br></br>
//            <br></br>
//           <Button variant="primary">Delete</Button>
//         </Card.Body>
//       </Card>
//     );
//   }
  
//   export default BuySubscription;





















// <!-- import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

// function AddSubscription() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         <ListGroup.Item>Cras justo odio</ListGroup.Item>
//         <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//         <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
//       </ListGroup>
//       <Card.Body>
//         <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body>
//     </Card>
//   );
// }

// export default AddSubscription; -->









//  import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

// function AddSubscription(params) {
//   return (
//     <Card style={{ width: '18rem' }} className="mx-auto d-flex align-items-center" >
      
//       <Card.Body>
//         <Card.Title>{params.data.name}</Card.Title>
//         <Card.Text>
//             {params.data.description}
//         </Card.Text>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         <ListGroup.Item> {params.data.price}</ListGroup.Item>
//         <ListGroup.Item> {params.data.Action}</ListGroup.Item>
        
//       </ListGroup>
//       <Card.Body>
//         <Card.Link href="#">Buy Now</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body>
//     </Card>
//   );
// }

// export default AddSubscription; 