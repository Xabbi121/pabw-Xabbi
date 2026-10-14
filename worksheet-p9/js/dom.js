import { cookieList } from "./app.js";

const container = document.querySelector("#list");

function buildCookieRow(cookie) {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.setAttribute("scope", "row");
    tdName.textContent = cookie.name;

    const tdRarity = document.createElement("td");
    tdRarity.textContent = cookie.rarity;

    const tdTopping = document.createElement("td");
    tdTopping.textContent = cookie.topping;

    tr.append(tdName, tdRarity, tdTopping);
    return tr;
}

function render(list){
    container.textContent = "";
    list.forEach((cookie) => {
        const row =buildCookieRow(cookie);
        container.append(row);
    });
}
render(cookieList);