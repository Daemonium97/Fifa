import React, { useEffect } from 'react'
import './ShowPlayers.css'
import { Container, Row, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

export const ShowPlayers = () => {


    const [players, setPlayers] = React.useState([])

    useEffect(() => {

        //console.log('Gato')
        getData()

    }, [])

    const getData = async () => {
        const data = await fetch("https://www.easports.com/fifa/ultimate-team/api/fut/item")
        const posts = await data.json()
        //console.log(posts)
        setPlayers(posts)

    }

    return (

        <Container fluid>
            <Row style={{ padding: '0px 0px 40px 0px' }}>
                <form className="search" action="action_page.php">
                    <input type="text" placeholder="Search Player.." name="search" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </Row>
            <Row>



                <Card style={{ width: '18rem', textAlign: 'center', background: 'white', borderRadius: '10px', boxShadow: '5px 5px 15px 5px #000000' }}>
                    <Card.Img variant="top" src="https://phantom-marca.unidadeditorial.es/55e7ae10b6dd5073839308b6f2a38d96/resize/1320/f/jpg/assets/multimedia/imagenes/2020/12/16/16081049108401.png" id="gato" style={{borderRadius:'1px'}} />

                    <Card.Body style={{ margin: '7px 0px 6px 0px' }}>
                        <Card.Title style={{ fontWeight: 'bold', fontSize: '18px' }}>Name</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem style={{ margin: '6px 0px 0px 0px' }} >Posicion</ListGroupItem>
                        <ListGroupItem style={{ margin: '6px 0px 6px 0px' }}>Country</ListGroupItem>
                        <ListGroupItem style={{ margin: '6px 0px 0px 0px', paddingBottom: '10px' }}>Team</ListGroupItem>
                    </ListGroup>
                </Card>

            </Row>
        </Container>




    )
}


