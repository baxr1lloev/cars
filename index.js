let arrCars = [
    {
        model: "BMW 5",
        color: "dark",
        cost: 10000,
    },
    {
        model: "Ford Mustang",
        color: "blue",
        cost: 6000,
    },
    {
        model: "Lexus IS 300",
        color: "white",
        cost: 5000,
    },
    {
        model: "Dodge Charger Hellcat Redeye",
        color: "green",
        cost: 18000,
    },
    {
        model: "Aston Martin DBS Superleggera.",
        color: "yellow",
        cost: 4000,
    },
    
]

let cheap = []

for (let item of arrCars) {
    if (item.cost < 7000) {
        cheap.push(item)
        document.write(`
        Model: ${item.model}<br>
        Color: ${item.color}<br>
        Cost: ${item.cost}<br><hr>
        `)
    } else {
        // console.log('no');
    }
}