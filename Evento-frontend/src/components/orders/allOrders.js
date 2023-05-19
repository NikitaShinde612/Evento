import Accordion from 'react-bootstrap/Accordion';
import { Container, ListGroup } from 'react-bootstrap';

function OrdersComponent(params) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header >Order No. </Accordion.Header>
        <Accordion.Body>
        <ListGroup>
                <ListGroup.Item>order id = {params.data.id}</ListGroup.Item>
                <ListGroup.Item>Client id = {params.data.client.id}</ListGroup.Item>
                <ListGroup.Item>Client email={params.data.client.email}</ListGroup.Item>
                <ListGroup.Item>Organization: {params.data.client.organization}</ListGroup.Item>
                <ListGroup.Item>durationOfPlan: {params.data.client.durationOfPlan}</ListGroup.Item>
                <ListGroup.Item>Subscription Name: {params.data.subscription.name}</ListGroup.Item>
                <ListGroup.Item>Subscription Description: {params.data.subscription.description}</ListGroup.Item>
                <ListGroup.Item>Subscription isActive: {params.data.subscription.active}</ListGroup.Item>
                
            </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}

export default OrdersComponent;