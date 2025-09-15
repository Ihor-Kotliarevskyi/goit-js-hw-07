const listItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItem.length}`);

listItem.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});

// for (let i = 0; i < listItem.length; i++) {
//   console.log(`Category: ${listItem[i].querySelector("h2").textContent}`);
//   console.log(`Elements: ${listItem[i].querySelectorAll("li").length}`);
// }

// const firstItemTitle = listItem[0].querySelector("h2");
// const firstItemItems = listItem[0].querySelectorAll("li");
// console.log(`Category: ${firstItemTitle.textContent}`);
// console.log(`Elements: ${firstItemItems.length}`);

// const secondItemTitle = listItem[1].querySelector("h2");
// const secondItemItems = listItem[1].querySelectorAll("li");
// console.log(`Category: ${secondItemTitle.textContent}`);
// console.log(`Elements: ${secondItemItems.length}`);

// const thirdItemTitle = listItem[2].querySelector("h2");
// const thirdItemItems = listItem[2].querySelectorAll("li");
// console.log(`Category: ${thirdItemTitle.textContent}`);
// console.log(`Elements: ${thirdItemItems.length}`);
