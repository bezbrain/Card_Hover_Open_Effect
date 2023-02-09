const textCon = document.querySelectorAll(".text");
const container = document.querySelectorAll(".con");

container.forEach((each) => {
  each.onmouseover = (e) => {
    e.currentTarget.style.height = "300px";
    e.currentTarget.style.transition = "1s ease all";
  };
});

container.forEach((each) => {
  each.onmouseout = (e) => {
    e.currentTarget.style.height = "120px";
  };
});
