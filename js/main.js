for (let li of aside__list.querySelectorAll("#aside__item")) {
  let span = document.createElement("span");
  span.classList.add("show");
  li.prepend(span);
  span.append(span.nextSibling);
}

aside__list.onclick = function (event) {
  if (event.target.tagName != "SPAN") return;

  let childrenList = event.target.parentNode.querySelector("ul");
  if (!childrenList) return;
  childrenList.hidden = !childrenList.hidden;

  if (childrenList.hidden) {
    event.target.classList.add("hide");
    event.target.classList.remove("show");
  } else {
    event.target.classList.add("show");
    event.target.classList.remove("hide");
  }
};

