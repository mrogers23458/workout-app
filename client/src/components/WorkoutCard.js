import { Card, Button, Accordion, ListGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function WorkoutCard () {
    const navigate = useNavigate()

    const handleNav = function () {
        navigate('/workouts/details')
    }
    return(
        <Card style={{ width: '90vw', marginBottom: '2vh' }}>
            <Card.Body>
                <Card.Title>Push</Card.Title>
                <Card.Text>
                    This workout focuses on push actions. 
                </Card.Text>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Exercises</Accordion.Header>
                            <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item>Push-ups</ListGroup.Item>
                                <ListGroup.Item>Bench Press</ListGroup.Item>
                                <ListGroup.Item>Tricep Dips</ListGroup.Item>
                                <ListGroup.Item>Overhead Tricep Extensions</ListGroup.Item>
                            </ListGroup>
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Button onClick={handleNav} variant="primary" style={ {marginTop: "2vh"}}>Details</Button>
            </Card.Body>
        </Card>
    )
}