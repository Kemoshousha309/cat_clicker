export function cardTemp(catId, catName, src, count) {
  return `
      <div class="card" id="${catId}" >
        <h2 class="catName">${catName}</h2>
        <img
          src="${src}"
          alt="cat picture"
          class="catImg"
        />
        <div class="counter">Counter: <span id="counterNum-${catId}">${count}</span></div>
      </div>
`;
}

export function listItemTemp(catId, catname) {
  return `
    <li class="listItem" id="listItem-${catId}" >${catname} </li>
  `;
}
