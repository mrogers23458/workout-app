import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FoodCard from "../components/FoodCard";

export default function Foods() {
    const [searchTerm, setSearchTerm] = useState({
        search: ''
    })

    const handleChange = function (e) {
        setSearchTerm({
            ...searchTerm, [e.target.name]:e.target.value
        })

        console.log(searchTerm)
    }
    const [foodItems, setFoodItems] = useState('')
    
    const foodSearch = async(e) => {
        e.preventDefault()

        console.log(searchTerm.search)
       const response = await fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${searchTerm.search}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
                "x-rapidapi-key": ""
            }
        })

        const foods = await response.json()
        console.log(foods)
        setFoodItems(foods)

    }

        if (foodItems !== '') {
            return(
                <div className="foods-box">
                        <Form onSubmit={foodSearch}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Food Search</Form.Label>
                                <Form.Control onChange={handleChange} name="search" placeholder="search a food" />
                            </Form.Group>
                        </Form>
                    <Button onClick={foodSearch}>Search</Button>
                    <FoodCard data={foodItems} />
                </div>
            )
        }

        
            return(
            <div className="foods-box">
                <Form onSubmit={foodSearch}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Food Search</Form.Label>
                        <Form.Control onChange={handleChange} type="search" name="search" placeholder="search a food" />
                    </Form.Group>
                </Form>
                <Button onClick={foodSearch}>search</Button>
            </div>
            )




}