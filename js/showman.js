let lis = document.querySelectorAll(".content li");
let body = document.querySelector("body");
let ModalFrame = document.querySelector(".ModalFrame");
console.log(lis);

for (let i = 0; i < lis.length; i++) {
  lis[i].onclick = function () {
    ModalFrame.style.display = "block";
  };
}
