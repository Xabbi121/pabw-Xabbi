import { cookieList } from "./app.js";

const container = document.querySelector("#list");
const filterRow = document.querySelector("#filter");
const emptyMessage = document.querySelector("#empty-message");

const form = document.querySelector("form");
const nameInput = document.querySelector("#cookie-name");
const raritySelect = document.querySelector("#rarity");
const toppingInput = document.querySelector("#topping");

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
    if (list.length === 0) {
        emptyMessage.hidden = false;
        } else {
            emptyMessage.hidden = true;
        }

    list.forEach((cookie) => {
        const row =buildCookieRow(cookie);
        container.append(row);
    });
}

function markActiveButton(activeButton){
    document.querySelectorAll("#filter button").forEach((button) => {
        button.classList.toggle("active", button === activeButton);
    });
}

filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const category = button.dataset.category;
    const selected = cookieList.filter(
        (cookie) => category === "all" || cookie.rarity === category
    );
     render(selected);
     markActiveButton(button);
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newCookie = {
        name: nameInput.value,
        rarity: raritySelect.value,
        topping: toppingInput.value,
        stillMeta: true
    };

    cookieList.push(newCookie);

    const activeButton = document.querySelector("#filter button.active");
    const currentCategory = activeButton ? activeButton.dataset.category : "all";

    const selected = cookieList.filter(
        (cookie) => currentCategory === "all" || cookie.rarity === currentCategory
    );

    render(selected);

    form.reset();
});

render(cookieList);