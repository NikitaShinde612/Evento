import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function FeedbackPage(params) {
    
    const navigate = useNavigate();
    const nav = ()=>{
        navigate("/Subscriptions");
    }

    return <>
        <h1>Feedback Page</h1>
        <Button onClick={nav}></Button>
    </>;
}
