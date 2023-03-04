const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const addlist =document.querySelector("#ingredients");

const markup =ingredients.map((list)=> `<li class-item new'>${list}</li>`).join("");

addlist.insertAdjacentHTML("beforeend", markup);
addlist.insertAdjacentHTML("beforebegin", "<h2>Vegetables</h2>");