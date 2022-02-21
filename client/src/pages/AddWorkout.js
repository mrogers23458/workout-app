import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import ExerciseCard from "../components/ExerciseCard"
export default function AddWorkout() {

    const [components, setComponents] = useState(["Sample Component"])

    function addComponent() {
        setComponents([...components, "Sample component"])
        console.log(components)
    }

    function removeComponent(i) {
        console.log(i)
        const element = document.getElementById(i)
        element.setAttribute('style', "display: none")
    }

    return(
        <div className="add-workout-box">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Workout Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Workout Name" />
                </Form.Group>
            </Form>
                <div id="exercises" className="exercises-box">
                    {components.map((item, i) => (<div key={i} id={i}><ExerciseCard  text={item} /><button onClick={() => removeComponent(i)}>remove this</button></div>))}
                </div>
                <Button id="add-exercise-btn" variant="primary" onClick={addComponent}>
                    Add Exercise
                </Button>
                <Button variant="primary" onClick={removeComponent} type="submit">
                    Create Workout
                </Button>
        </div>
    )
}