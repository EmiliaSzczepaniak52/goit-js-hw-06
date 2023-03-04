const categoriesList = document.querySelectorAll("h2");
const count= categoriesList.length;
console.log(`Number of categories: ${count}`);

const categories = document.querySelectorAll(".item");
categories.forEach((category)=>
 {const header =category.querySelector("h2").textContent;
  const listElement = category.querySelectorAll("li").length;
  console.log(`Category: ${header} Elements: ${listElement}`);
 }
                   );


