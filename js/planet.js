class Planet
{
  constructor()
  {
    this.name = planetsName[randomIntFromInterval(0, planetsName.length - 1)];
    this.pic = new Image();
    this.position = {x: randomIntFromInterval(0, 9), y: randomIntFromInterval(0, 9)};
    this.dimension = randomIntFromInterval(10, 20);
    this.distruction = 1;
    this.progress = 1;
    this.planetPower = this.dimension * this.distruction * this.progress;
    this.ships = [];
    this.color = `rgba(255, 255, 255, 0.3)`
    this.owner = "free"
  }

  shipGeneration()
  {
    for(var i = 0; i < this.planetPower; i++)
    { 
      this.ships.push(new Ship());
    }
  }

  sendAttack(shipsNumber)
  {
    if (shipsNumber <= 0) return 1;
    if (shipsNumber > this.ships.length) {alert("Not Enough Ships"); return 1;}
    let attackingShips = [];
    for (var i = 0; i <= shipsNumber; i++)
    {
      attackingShips.push(this.ships.pop());
    }
  }

  receiveAttack()
  {

  }
}

let planetsName = ["Proxima Centauri B", "Gliese 667", "Kepler 442", "Wolf 1061 C", "Kapteyn B",
 "Luyten", "Trappist 1D", "LSH 1140", "Tau Ceti E", "Ross 128", "Abeir-Toril", "Acheron", "Arda",
  "Arrakis", "Caprica", "Czarnia", "Cybertron", "Eroticon 6", "Fury 161", "Giedi Prime", "Helion Prime",
   "Klendathu", "LV-233", "Magrathea", "Nibiru", "Oddworld", "Omicron Persei 8", "Proteus", "Rigel IV",
    "Sakaar", "Soror", "Trantor", "Ursa Minor Beta", "Vegeta", "Yuggoth"];

let planets = [];



function createPlanets()
{
  let numberOfPlanets = parseInt(document.querySelector("#planets").value)
  for(var i = 0; i < numberOfPlanets; i++)
  {
    const newPlanet = new Planet;
    newPlanet.pic.src = `./images/planets/planet${i + 1}.png`;
    newPlanet.shipGeneration()
    newPlanet.shipGeneration()
    planets.push(newPlanet)

    if(i > 0)
    {
      for(var j = i - 1; j >= 0; j--)
      {
        if((newPlanet.position.x === planets[j].position.x && newPlanet.position.y === planets[j].position.y)
         || newPlanet.name === planets[j].name)
          {
            planets.splice(i, 1); i--}
      }
    }
  }
}

function drawPlanet()
{
  planets.forEach(planet => {
    ctx.beginPath()
    ctx.fillStyle = `${planet.color}`
    ctx.fillRect(planet.position.x * squareLength, planet.position.y * squareLength, squareLength, squareLength)
    ctx.closePath()
    ctx.beginPath()
    ctx.drawImage(planet.pic, planet.position.x * squareLength, planet.position.y * squareLength, squareLength, squareLength)
    ctx.closePath()
  })
}

