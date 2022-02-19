import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import WorkoutCard from "../components/WorkoutCard";

export default function Workouts () {
    const navigate = useNavigate()

    const handleNav = function () {
        navigate('/workouts/add')
    }

    return(
        <div className="workouts-page-box">
            <div className="workouts-header-box">
                <h1 className="workouts-header-text">Workouts</h1>
            </div>
            <div className="workouts-card-box">
                <WorkoutCard />
                <WorkoutCard />
            </div>
            <div className="add-new-workout-button">
                <Button onClick={handleNav}>Add New Workout</Button>
            </div>
        </div>
    )
}