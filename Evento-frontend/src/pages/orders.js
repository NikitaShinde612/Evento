import { ListGroup } from 'react-bootstrap';
import BasicExample from '../components/form/formItemCards';
import OrdersComponent from '../components/orders/allOrders';
import ButtonDarkExample from '../components/orders/allOrders';

export default function orderPage(params) {
    const orderData = [
        {
            "id": 1,
            "client": {
                "id": 3,
                "email": "niki@gmail.com",
                "organization": "sunbeam",
                "durationOfPlan": "2023-02-27T14:26:22"
            },
            "subscription": {
                "id": 3,
                "name": "a",
                "price": 500,
                "duration": "2023-02-14T13:18:17",
                "discount": 10.0,
                "description": "sub4",
                "active": false
            },
            "orderTime": "2023-02-23T14:21:20",
            "transactionId": "1554"
        },
        {
            "id": 3,
            "client": {
                "id": 1,
                "userName": "Shubham Dahatre1212",
                "email": "shubha1212m@gmail.com",
                "phone": "10101111",
                "planActivationDate": "2023-02-28T12:05:24.736865",
                "durationOfPlan": "2013-02-05T14:22:22"
            },
            "subscription": {
                "id": 3,
                "name": "a",
                "price": 500,
                "duration": "2023-02-14T13:18:17",
                "discount": 10.0,
                "description": "sub4",
                "active": false
            },
            "orderTime": "2023-02-28T00:08:10.955771",
            "transactionId": "order_LLZPxVAc6dz0JM"
        },
        {
            "id": 4,
            "client": {
                "id": 1,
                "userName": "Shubham Dahatre1212",
                "email": "shubha1212m@gmail.com",
                "phone": "10101111",
                "planActivationDate": "2023-02-28T12:05:24.736865",
                "durationOfPlan": "2013-02-05T14:22:22"
            },
            "subscription": {
                "id": 1,
                "name": "plan4 updated",
                "price": 251,
                "duration": "2013-02-05T14:22:22",
                "discount": 13.9,
                "description": "trail description4",
                "active": true
            },
            "orderTime": "2023-02-28T12:05:24.736836",
            "transactionId": "order_LLldaptayV51NI"
        },
        {
            "id": 5,
            "client": {
                "id": 2,
                "userName": "Santosh Dahatre1456",
                "email": "shubha121112m@gmail.com",
                "phone": "10101115",
                "planActivationDate": "2023-03-01T16:18:24.666689",
                "durationOfPlan": "2013-02-08T14:22:22"
            },
            "subscription": {
                "id": 2,
                "name": "plan2",
                "price": 200,
                "duration": "2013-02-08T14:22:22",
                "discount": 13.5,
                "description": "trail description2",
                "active": true
            },
            "orderTime": "2023-03-01T16:18:24.666689",
            "transactionId": "test123"
        }
    ]
    
    return(
        <>
        <h1 align="center">All Orders</h1>
        
          <ListGroup>
            {orderData.map(f=><ListGroup.Item ><OrdersComponent data={f}></OrdersComponent></ListGroup.Item>)}
            </ListGroup>
        </>
      );
}
