import { Card, Button } from "react-bootstrap"

export default function FoodCard(props) {
        console.log(props)
        const food = props.data
        const dataArray = props.data.parsed
        const foodData = food.parsed[0]
        console.log(food)

        if (dataArray < 1) {
            return (
                <div>
                    <h1> No foods found with name {food.text}</h1>
                </div>
            )
        }

        else {
            const foodImgSrc = foodData.food.image
            const nutrientInfo = foodData.food.nutrients
            const calories = nutrientInfo.ENERC_KCAL
            const fat = nutrientInfo.FAT
            const carbs = nutrientInfo.CHOCDF
            const protein = nutrientInfo.PROCNT

            return(
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={foodImgSrc} />
                <Card.Body>
                  <Card.Title>{food.text}</Card.Title>
                  <Card.Text>
                    Calories: {calories}
                  </Card.Text>
                  <Card.Text>
                    from carbs: {carbs}
                  </Card.Text>
                  <Card.Text>
                    from fat: {fat}
                  </Card.Text>
                  <Card.Text>
                    from protein: {protein}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            )
        }
}