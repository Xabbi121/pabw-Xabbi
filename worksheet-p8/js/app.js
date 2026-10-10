const cookie = {
    name: "Timekeeper Cookie",
    Rarity: "Legend",
    toppings: ["Cooldown Topping", "Attack Topping", "Damage Resist Topping"],
    toppingsamount: "5"
};
window.cookie = cookie;

const cookieProfile = `The name is ${cookie.name}, Their rarity are ${cookie.Rarity}, and people use her with ${cookie.toppingsamount} ${cookie.toppings[0]}.`;
console.log(cookieProfile);  

function CreateIntroduction ({name, Rarity}) {
    return `the cookie is ${cookie.name}, and their rarity is ${cookie.Rarity}`;
}

const formatToppings = (List) => List.join(",");

console.log(CreateIntroduction(cookie));
console.log(formatToppings(cookie.toppings));

window.CreateIntroduction = CreateIntroduction;
window.formatToppings = formatToppings;