import { Form } from "react-bootstrap"

export default function ExerciseCard(props) {
    console.log(props)
    
    return (
        <div className="exercise-card-box">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>exercise name</Form.Label>
                    <Form.Control type="text" placeholder="exercise name" />
                    <Form.Label>number of sets</Form.Label>
                    <Form.Control type="text" placeholder="sets" />
                    <Form.Label>number of reps</Form.Label>
                    <Form.Control type="text" placeholder="reps" />
                </Form.Group>
            </Form>
        </div>
    )
}