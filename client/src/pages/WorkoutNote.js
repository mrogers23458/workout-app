import { Button, Form } from "react-bootstrap";
import NoteCard from "../components/NoteCard";

export default function WorkoutNote() {
    return (
        <div className="workout-notes-box">
            <h1 className="notes-header-text">Workout Notes</h1>
            <NoteCard />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicNote">
                    <Form.Label>Note Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter note title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNoteContent">
                    <Form.Label>Note Content</Form.Label>
                    <Form.Control type="textbox" as={"textarea"} placeholder="Note goes here" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Note
                </Button>
            </Form>
        </div>

    )
}