import React from 'react'
import './ShowPlayers.css'
import { Container, Row, Card,ListGroup, ListGroupItem } from 'react-bootstrap'

export const ShowPlayers = () => {
    return (

        <Container fluid>
            <Row>
                <Card style={{ width: '18rem', textAlign: 'center' }}>
                    <Card.Img variant="top" src="https://anizeen.com/content/wp-content/uploads/2020/06/0625nakineko11-400x400.jpg" />
                    <Card.Body>
                        <Card.Title>Name</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Posicion</ListGroupItem>
                        <ListGroupItem>Country</ListGroupItem>
                        <ListGroupItem>Team</ListGroupItem>
                    </ListGroup>
                </Card>
            </Row>
        </Container>




    )
}


