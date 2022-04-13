import { listItemTemp, cardTemp } from "./src/temps.js";

const state = {
  currentCat: "one",
  data: [
    {
      catId: "one",
      counter: 0,
      catName: "lolo",
      imgSrc:
        "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    },
    {
      catId: "two",
      counter: 0,
      catName: "july",
      imgSrc:
        "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      catId: "three",
      counter: 0,
      catName: "magy",
      imgSrc:
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ],
};

let listOutput = "";
state.data.forEach((cat) => {
  // build list
  listOutput = listOutput + listItemTemp(cat.catId, cat.catName);
});

const catsList = document.querySelector(".catsList");
catsList.innerHTML = listOutput;

// initial cat
buildCurrentCat();

function buildCurrentCat() {
  const [{ catId, catName, imgSrc, counter }] = state.data.filter(
    ({ catId }) => catId === state.currentCat
  );
  const mainCatContainer = document.querySelector(".mainCat");
  mainCatContainer.innerHTML = cardTemp(catId, catName, imgSrc, counter);
  const currentImg = document.querySelector(".catImg");
  currentImg.addEventListener("click", () => {
    state.data.forEach(({ catId, counter }, index) => {
      if (catId === state.currentCat) {
        // update the state
        state.data[index].counter = ++counter;
        // update the ui
        const currentCountNum = document.querySelector(`#counterNum-${catId}`);
        currentCountNum.innerHTML = state.data[index].counter;
      }
    });
  });
}

// set event listeners
state.data.forEach(({ catId }) => {
  const listItem = document.querySelector(`#listItem-${catId}`);
  listItem.addEventListener("click", () => {
    state.currentCat = catId;
    buildCurrentCat();
  });
});
