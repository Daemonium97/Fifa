import React from 'react'
import './ShowPlayers.css'
import { Container, Row, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

export const ShowPlayers = () => {




    
    return (

        <Container fluid>
            <Row style={{padding:'0px 0px 40px 0px'}}>
                <form className="search" action="action_page.php">
                    <input type="text" placeholder="Search Player.." name="search" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </Row>
            <Row>

                <Card style={{ width: '18rem', textAlign: 'center', background: 'white', borderRadius: '10px', boxShadow: '5px 5px 15px 5px #000000' }}>
                    <Card.Img variant="top" src="https://anizeen.com/content/wp-content/uploads/2020/06/0625nakineko11-400x400.jpg" id="gato" />
                    <Card.Body style={{ margin: '7px 0px 6px 0px' }}>
                        <Card.Title style={{ fontWeight: 'bold', fontSize: '18px' }}>Name</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem style={{ margin: '6px 0px 0px 0px' }}>Posicion</ListGroupItem>
                        <ListGroupItem style={{ margin: '6px 0px 6px 0px' }}>Country</ListGroupItem>
                        <ListGroupItem style={{ margin: '6px 0px 0px 0px', paddingBottom: '10px' }}>Team</ListGroupItem>
                    </ListGroup>
                </Card>

            </Row>
        </Container>




    )
}


