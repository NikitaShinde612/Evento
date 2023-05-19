import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';

export default function LandingPage(params) {

    return (<div>
        <h1>LandingPage</h1>
        <Container >
            <h1> hiii</h1>
          <strong className="mr-auto">LandingPage</strong>
            <Container fluid="sm">
                <strong className="mr-auto">sm</strong>
            </Container>
            <Container fluid="md">
                <strong className="mr-auto">md</strong>
            </Container>
            <Container fluid="lg">
                <strong className="mr-auto">lg</strong>
            </Container>
            <Container fluid="xl">
                <strong className="mr-auto">xl</strong>
            </Container>
            <Container fluid="xxl">
                <strong className="mr-auto">xxl</strong>
            </Container>

    </Container>
    </div>);
}
