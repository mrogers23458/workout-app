export default function Home() {
    fetch("https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
		"x-rapidapi-key": "c119c065bcmsh0b9deb1575b0f9fp18332fjsnef8c2094de33"
	}
})
.then(response => {
	response.json().then((data)=> {
        console.log(data)
        const saveLocal = JSON.stringify(data)
        localStorage.setItem('foodData', saveLocal)
    })
})

.catch(err => {
	console.error(err);
});

const retrieveData = localStorage.getItem('foodData')
const useableData = JSON.parse(retrieveData)
console.log(useableData)

    return(
        <div className="home-box">
            {useableData.text}
        </div>
    )
}