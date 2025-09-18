console.log(
  `Number of categories: ${document.querySelectorAll(".item").length}`
);

document.querySelectorAll(".item").forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
