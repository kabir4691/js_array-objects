var penguin = {};

penguin.outfit = {
	hat: "Fedora",
	shirt: "Kurta",
    pants: "Jeans",
    shoes: "Juttis", 
}; 

var penguinHatType = penguin.outfit.hat;
console.log(penguinHatType);

penguin.outfit.accessory = "Pocket Watch";
penguin.outfit.hat = "Top Hat";
delete penguin.outfit.pants;

for (item in penguin.outfit) {
    console.log(`${item}: ${penguin.outfit[item]}`);
}