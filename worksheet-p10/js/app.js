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

export const cookieList = [
    {
        name: "Millenial Tree Cookie", 
        rarity: "Legend", 
        topping: "3 Health topping, 2 Amplify Buff topping",
        stillMeta: false
    },
    {
        name: "Timekeeper Cookie",
        rarity: "Legend",
        topping: "Full Cooldown topping", 
        stillMeta: true
    },
    {
        name: "Ananas Dragon Cookie", 
        rarity: "Dragon", 
        topping: "Full attack topping",
        stillMeta: true
    },
    {
        name: "Povidine Iodine Cookie", 
        rarity: "Super Epic", 
        topping: "Full Cooldown topping", 
        stillMeta: true
    },
    {
        name: "Nether Queen Cookie", 
        rarity: "Legend", 
        topping: "3 Health topping, 2 Cooldown", 
        stillMeta: true
    },
];

window.cookieList = cookieList;

console.table(cookie.toppings);
console.table(cookieList);

const cookieMeta = cookieList.filter((item) => item.stillMeta);
console.table(cookieMeta);

const spesificCookie = cookieList.find((item) => item.name === "Timekeeper Cookie");
console.log(spesificCookie);

