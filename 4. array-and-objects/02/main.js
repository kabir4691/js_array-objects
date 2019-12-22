var gunter = {
	name: "Gunter",
	origin: "Adventure Time",
	canFly: false,
	sayHello: function() {
		console.log("QUACK!!!");
	}
};

var ramon = {
	name: "Ramón",
	origin: "Happy Feet",
	canFly: true,
	sayHello: function() {
		console.log("Estoy encantado de conocerle.");
	}
};

var fred = {
	name: "Fred",
	origin: "Sitting Ducks",
	canFly: false,
	sayHello: function() {
		console.log("Hi there!");
	}
};

var penguins = [gunter, ramon, fred];
console.log(penguins[0]);
var secondPenguin = penguins[1];
console.log(penguins[penguins.length - 1]);

var myPenguin = {
	name: "Whiteblack",
	origin: "Whiteblack the Penguin Sees the World",
	canFly: true,
	sayHello: function() {
		console.log("Kya haal hai?");
	}
};
penguins.push(myPenguin);

penguins[0].canFly = true;
penguins[0].sayHello();
for (penguin of penguins) { 
    console.log(penguin.name);
}
for (penguin of penguins) { 
    penguin.sayHello();
}
for (penguin of penguins) { 
    penguin.numberOfFeet = 2;
}
for (penguin of penguins) { 
    if (penguin.canFly) { 
        console.log(`${penguin.name} can fly!`);
    }
    penguin.numberOfFeet = 2;
}
