var penguin = {
    favoriteFoods: ["fish", "squid", "krill"]
};
console.log(penguin.favoriteFoods[1]);
var firstFavFood = penguin.favoriteFoods[0];
penguin.favoriteFoods.push("saltwater");
console.log(penguin.favoriteFoods.length);
penguin.favoriteFoods[penguin.favoriteFoods.length - 1] = "pineapples";
var lastFavFood = () => penguin.favoriteFoods[penguin.favoriteFoods.length - 1];
for (food of penguin.favoriteFoods) { 
    console.log(food);
}
